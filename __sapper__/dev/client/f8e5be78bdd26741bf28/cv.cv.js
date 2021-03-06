(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cv"],{

/***/ "./src/routes/cv.svelte":
/*!******************************!*\
  !*** ./src/routes/cv.svelte ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/cv.svelte generated by Svelte v3.31.0 */


const file = "src/routes/cv.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-3hnhqj-style";
	style.textContent = "section.svelte-3hnhqj{text-align:center}h2.svelte-3hnhqj{font-size:1.25rem}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Yuc3ZlbHRlIiwic291cmNlcyI6WyJjdi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuICBzZWN0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5EYW5iZWUgQ2hvbiB8IENWPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48c2VjdGlvbj5cbiAgPGgyPlB1YmxpY2F0aW9uczwvaDI+XG48L3NlY3Rpb24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0UsT0FBTyxjQUFDLENBQUMsQUFDUCxVQUFVLENBQUUsTUFBTSxBQUNwQixDQUFDLEFBRUQsRUFBRSxjQUFDLENBQUMsQUFDRixTQUFTLENBQUUsT0FBTyxBQUNwQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let t0;
	let section;
	let h2;
	let t1;

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Publications");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-271kzv\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", { class: true });
			var section_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section);
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "H2", { class: true });
			var h2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h2);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h2_nodes, "Publications");
			h2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			document.title = "Danbee Chon | CV";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h2, "class", "svelte-3hnhqj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 14, 2, 169);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "svelte-3hnhqj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 13, 0, 157);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, h2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h2, t1);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(section);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Cv", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Cv> was created with unknown prop '${key}'`);
	});

	return [];
}

class Cv extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-3hnhqj-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Cv",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Cv);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmOGU1YmU3OGJkZDI2NzQxYmYyOC9jdi5jdi5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9