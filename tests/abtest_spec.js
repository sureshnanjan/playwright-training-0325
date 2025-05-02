import { test, expect } from "@playwright/test";
import { ABTesting } from "../pages/abtest_page.js";
test("Heading is OK", ()=>{
/// AAA
const expected_result = "A/B Test Variation 1"
const abtest = new ABTesting();
const actual_heading = abtest.getTitle();
expect(actual_heading).toEqual(expected_result);


});
test("Paragrapg is OK", ()=>{});
test("Cookie with value True", ()=>{
    const expected_result = "No A/B Test"
    // Set Cookie with value TRue
const abtest = new ABTesting();
abtest.enableABTest();
const actual_heading = abtest.getTitle();
expect(actual_heading).toEqual(expected_result);
});
test("Cookie with Value False", ()=>{});
test("Cookie Not available", ()=>{});
