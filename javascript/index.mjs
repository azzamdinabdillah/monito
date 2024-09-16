import { getDogs } from "./dog-list.mjs";
import { appendFilterDesktopToMobile, mobileFilterElementHandle } from "./filter.mjs";
import { sideBarHandle } from "./sidebar.mjs";

getDogs();

appendFilterDesktopToMobile();

mobileFilterElementHandle();

sideBarHandle();
