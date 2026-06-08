import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as Star } from "../_libs/lucide-react.mjs";
function Stars({ value, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 ${className}`, "aria-label": `${value} out of 5`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground/90", children: value.toFixed(1) })
  ] });
}
export {
  Stars as S
};
