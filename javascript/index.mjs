import { getDogs } from "./dog-list.mjs";
import { mobileFilterElementHandle } from "./filter.mjs";

getDogs();

const filterSettingMobileElement = document.querySelector('.filter-settings-wrapper');
const filterSettingDesktopElement = document.querySelector('.dog-filter');

filterSettingMobileElement.innerHTML = filterSettingDesktopElement.innerHTML;

mobileFilterElementHandle();
