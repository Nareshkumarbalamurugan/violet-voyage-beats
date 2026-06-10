import { B as BufferGeometry, e as Float32BufferAttribute } from "./three.mjs";
import { f as flatten, e as earcut } from "./earcut.mjs";
import { D as Delaunator } from "./delaunator.mjs";
import { i as index_default } from "./turf__boolean-point-in-polygon.mjs";
import { m as merge, e as extent, d as mean } from "./d3-array.mjs";
import { e as geoBounds, f as geoContains, g as geoDistance$1, a as geoInterpolate } from "./d3-geo.mjs";
import { g as geoVoronoi } from "./d3-geo-voronoi.mjs";
import { l as linear } from "./d3-scale.mjs";
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _createClass(e, r, t) {
  return Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function geoPolygonTriangulate(polygon) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$resolution = _ref.resolution, resolution = _ref$resolution === void 0 ? Infinity : _ref$resolution;
  var contour = interpolateContourPoints(polygon, resolution);
  var edgePoints = merge(contour);
  var innerPoints = getInnerGeoPoints(polygon, resolution);
  var points = [].concat(_toConsumableArray(edgePoints), _toConsumableArray(innerPoints));
  var boundariesGeojson = {
    type: "Polygon",
    coordinates: polygon
  };
  var _geoBounds = geoBounds(boundariesGeojson), _geoBounds2 = _slicedToArray(_geoBounds, 2), _geoBounds2$ = _slicedToArray(_geoBounds2[0], 2), minLng = _geoBounds2$[0], minLat = _geoBounds2$[1], _geoBounds2$2 = _slicedToArray(_geoBounds2[1], 2), maxLng = _geoBounds2$2[0], maxLat = _geoBounds2$2[1];
  var crossesPoleOrAntimeridian = minLng > maxLng || maxLat >= 89 || minLat <= -89;
  var indices = [];
  if (crossesPoleOrAntimeridian) {
    var vt = geoVoronoi(points).triangles();
    var pntMap = new Map(points.map(function(_ref2, idx) {
      var _ref3 = _slicedToArray(_ref2, 2), lng = _ref3[0], lat = _ref3[1];
      return ["".concat(lng, "-").concat(lat), idx];
    }));
    vt.features.forEach(function(f) {
      var _indices;
      var triangle = f.geometry.coordinates[0].slice(0, 3).reverse();
      var inds = [];
      triangle.forEach(function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), lng = _ref5[0], lat = _ref5[1];
        var k = "".concat(lng, "-").concat(lat);
        pntMap.has(k) && inds.push(pntMap.get(k));
      });
      if (inds.length !== 3) return;
      if (inds.some(function(ind) {
        return ind < edgePoints.length;
      })) {
        var triangleCentroid = f.properties.circumcenter;
        if (!pointInside(triangleCentroid, boundariesGeojson, crossesPoleOrAntimeridian)) return;
      }
      (_indices = indices).push.apply(_indices, inds);
    });
  } else if (!innerPoints.length) {
    var _earcutFlatten = flatten(contour), vertices = _earcutFlatten.vertices, _earcutFlatten$holes = _earcutFlatten.holes, holes = _earcutFlatten$holes === void 0 ? [] : _earcutFlatten$holes;
    indices = earcut(vertices, holes, 2);
  } else {
    var delaunay = Delaunator.from(points);
    var _loop = function _loop2(i2) {
      var _indices2;
      var inds = [2, 1, 0].map(function(idx) {
        return delaunay.triangles[i2 + idx];
      });
      var triangle = inds.map(function(indice) {
        return points[indice];
      });
      if (inds.some(function(ind) {
        return ind < edgePoints.length;
      })) {
        var triangleCentroid = [0, 1].map(function(coordIdx) {
          return mean(triangle, function(p) {
            return p[coordIdx];
          });
        });
        if (!pointInside(triangleCentroid, boundariesGeojson, crossesPoleOrAntimeridian)) return 1;
      }
      (_indices2 = indices).push.apply(_indices2, _toConsumableArray(inds));
    };
    for (var i = 0, len = delaunay.triangles.length; i < len; i += 3) {
      if (_loop(i)) continue;
    }
  }
  var lngUvScale = linear(extent(points, function(d) {
    return d[0];
  }), [0, 1]);
  var latUvScale = linear(extent(points, function(d) {
    return d[1];
  }), [0, 1]);
  var uvs = points.map(function(_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2), lng = _ref7[0], lat = _ref7[1];
    return [lngUvScale(lng), latUvScale(lat)];
  });
  var triangles = {
    points,
    indices,
    uvs
  };
  return {
    contour,
    triangles
  };
}
function interpolateContourPoints(polygon, maxDistance) {
  return polygon.map(function(coords) {
    var pnts = [];
    var prevPnt;
    coords.forEach(function(pnt) {
      if (prevPnt) {
        var dist = geoDistance$1(pnt, prevPnt) * 180 / Math.PI;
        if (dist > maxDistance) {
          var interpol = geoInterpolate(prevPnt, pnt);
          var tStep = 1 / Math.ceil(dist / maxDistance);
          var t = tStep;
          while (t < 1) {
            pnts.push(interpol(t));
            t += tStep;
          }
        }
      }
      pnts.push(prevPnt = pnt);
    });
    return pnts;
  });
}
function getInnerGeoPoints(polygon, maxDistance) {
  var boundariesGeojson = {
    type: "Polygon",
    coordinates: polygon
  };
  var _geoBounds3 = geoBounds(boundariesGeojson), _geoBounds4 = _slicedToArray(_geoBounds3, 2), _geoBounds4$ = _slicedToArray(_geoBounds4[0], 2), minLng = _geoBounds4$[0], minLat = _geoBounds4$[1], _geoBounds4$2 = _slicedToArray(_geoBounds4[1], 2), maxLng = _geoBounds4$2[0], maxLat = _geoBounds4$2[1];
  if (Math.min(Math.abs(maxLng - minLng), Math.abs(maxLat - minLat)) < maxDistance) return [];
  var crossesPoleOrAntimeridian = minLng > maxLng || maxLat >= 89 || minLat <= -89;
  return getGeoSpiralGrid(maxDistance, {
    minLng,
    maxLng,
    minLat,
    maxLat
  }).filter(function(pnt) {
    return pointInside(pnt, boundariesGeojson, crossesPoleOrAntimeridian);
  });
}
function getGeoSpiralGrid(distanceBetweenPoints) {
  var _ref8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, minLng = _ref8.minLng, maxLng = _ref8.maxLng, minLat = _ref8.minLat, maxLat = _ref8.maxLat;
  var numPoints = Math.round(Math.pow(360 / distanceBetweenPoints, 2) / Math.PI);
  var phi = (1 + Math.sqrt(5)) / 2;
  var getPntLng = function getPntLng2(idx) {
    return idx / phi * 360 % 360 - 180;
  };
  var getPntLat = function getPntLat2(idx) {
    return Math.acos(2 * idx / numPoints - 1) / Math.PI * 180 - 90;
  };
  var getPntIdx = function getPntIdx2(lat) {
    return numPoints * (Math.cos((lat + 90) * Math.PI / 180) + 1) / 2;
  };
  var pntIdxRange = [maxLat !== void 0 ? Math.ceil(getPntIdx(maxLat)) : 0, minLat !== void 0 ? Math.floor(getPntIdx(minLat)) : numPoints - 1];
  var isLngInRange = minLng === void 0 && maxLng === void 0 ? function() {
    return true;
  } : minLng === void 0 ? function(lng2) {
    return lng2 <= maxLng;
  } : maxLng === void 0 ? function(lng2) {
    return lng2 >= minLng;
  } : maxLng >= minLng ? function(lng2) {
    return lng2 >= minLng && lng2 <= maxLng;
  } : function(lng2) {
    return lng2 >= minLng || lng2 <= maxLng;
  };
  var pnts = [];
  for (var i = pntIdxRange[0]; i <= pntIdxRange[1]; i++) {
    var lng = getPntLng(i);
    isLngInRange(lng) && pnts.push([lng, getPntLat(i)]);
  }
  return pnts;
}
function pointInside(pnt, polygon) {
  var crossesPoleOrAntimeridian = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  return crossesPoleOrAntimeridian ? geoContains(polygon, pnt) : index_default(pnt, polygon);
}
var THREE = window.THREE ? window.THREE : {
  BufferGeometry,
  Float32BufferAttribute
};
var setAttributeFn = new THREE.BufferGeometry().setAttribute ? "setAttribute" : "addAttribute";
var ConicPolygonGeometry = /* @__PURE__ */ (function(_THREE$BufferGeometry) {
  function ConicPolygonGeometry2(polygonGeoJson, bottomHeight, topHeight, closedBottom, closedTop, includeSides, curvatureResolution) {
    var _this;
    _classCallCheck(this, ConicPolygonGeometry2);
    _this = _callSuper(this, ConicPolygonGeometry2);
    _this.type = "ConicPolygonGeometry";
    _this.parameters = {
      polygonGeoJson,
      bottomHeight,
      topHeight,
      closedBottom,
      closedTop,
      includeSides,
      curvatureResolution
    };
    bottomHeight = bottomHeight || 0;
    topHeight = topHeight || 1;
    closedBottom = closedBottom !== void 0 ? closedBottom : true;
    closedTop = closedTop !== void 0 ? closedTop : true;
    includeSides = includeSides !== void 0 ? includeSides : true;
    curvatureResolution = curvatureResolution || 5;
    var _geoPolygonTriangulat = geoPolygonTriangulate(polygonGeoJson, {
      resolution: curvatureResolution
    }), contour = _geoPolygonTriangulat.contour, triangles = _geoPolygonTriangulat.triangles;
    var flatUvs = merge(triangles.uvs);
    var vertices = [];
    var uvs = [];
    var indices = [];
    var groupCnt = 0;
    var addGroup = function addGroup2(groupData) {
      var prevVertCnt = Math.round(vertices.length / 3);
      var prevIndCnt = indices.length;
      vertices = vertices.concat(groupData.vertices);
      uvs = uvs.concat(groupData.uvs);
      indices = indices.concat(!prevVertCnt ? groupData.indices : groupData.indices.map(function(ind) {
        return ind + prevVertCnt;
      }));
      _this.addGroup(prevIndCnt, indices.length - prevIndCnt, groupCnt++);
    };
    includeSides && addGroup(generateTorso());
    closedBottom && addGroup(generateCap(bottomHeight, false));
    closedTop && addGroup(generateCap(topHeight, true));
    _this.setIndex(indices);
    _this[setAttributeFn]("position", new THREE.Float32BufferAttribute(vertices, 3));
    _this[setAttributeFn]("uv", new THREE.Float32BufferAttribute(uvs, 2));
    _this.computeVertexNormals();
    function generateVertices(polygon, altitude) {
      var altFn = typeof altitude === "function" ? altitude : function() {
        return altitude;
      };
      var coords3d = polygon.map(function(coords) {
        return coords.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), lng = _ref2[0], lat = _ref2[1];
          return polar2Cartesian(lat, lng, altFn(lng, lat));
        });
      });
      return flatten(coords3d);
    }
    function generateTorso() {
      var _generateVertices = generateVertices(contour, bottomHeight), bottomVerts = _generateVertices.vertices, holes = _generateVertices.holes;
      var _generateVertices2 = generateVertices(contour, topHeight), topVerts = _generateVertices2.vertices;
      var vertices2 = merge([topVerts, bottomVerts]);
      var numPoints = Math.round(topVerts.length / 3);
      var holesIdx = new Set(holes);
      var lastHoleIdx = 0;
      var indices2 = [];
      for (var v0Idx = 0; v0Idx < numPoints; v0Idx++) {
        var v1Idx = v0Idx + 1;
        if (v1Idx === numPoints) {
          v1Idx = lastHoleIdx;
        } else if (holesIdx.has(v1Idx)) {
          var holeIdx = v1Idx;
          v1Idx = lastHoleIdx;
          lastHoleIdx = holeIdx;
        }
        indices2.push(v0Idx, v0Idx + numPoints, v1Idx + numPoints);
        indices2.push(v1Idx + numPoints, v1Idx, v0Idx);
      }
      var uvs2 = [];
      for (var v = 1; v >= 0; v--) for (var i = 0; i < numPoints; i += 1) uvs2.push(i / (numPoints - 1), v);
      return {
        indices: indices2,
        vertices: vertices2,
        uvs: uvs2
      };
    }
    function generateCap(radius) {
      var isTop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      return {
        // need to reverse-wind the bottom triangles to make them face outwards
        indices: isTop ? triangles.indices : triangles.indices.slice().reverse(),
        vertices: generateVertices([triangles.points], radius).vertices,
        uvs: flatUvs
      };
    }
    return _this;
  }
  _inherits(ConicPolygonGeometry2, _THREE$BufferGeometry);
  return _createClass(ConicPolygonGeometry2);
})(THREE.BufferGeometry);
function polar2Cartesian(lat, lng) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var phi = (90 - lat) * Math.PI / 180;
  var theta = (90 - lng) * Math.PI / 180;
  return [
    r * Math.sin(phi) * Math.cos(theta),
    // x
    r * Math.cos(phi),
    // y
    r * Math.sin(phi) * Math.sin(theta)
    // z
  ];
}
export {
  ConicPolygonGeometry as C
};
