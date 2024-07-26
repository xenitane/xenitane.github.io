import type { Alpine } from "alpinejs";
import focus from "@alpinejs/focus";

export default function (alpine: Alpine) {
    alpine.plugin(focus);
}
