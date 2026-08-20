import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

// Given("user is on the enrollment page", async function () {
//     await startApplicationPage.login();
// });

Then("the program start date in displayed", async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("the program refund date in displayed", async function () {
    await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("the displayed start date for the program is correct", async function () {
    const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
    const EXPECTED_START_DATE = productInfo.startDate;
    // console.log(`Actual Start Date: ${ACTUAL_START_DATE}`);
    // console.log(`Expected Start Date: ${EXPECTED_START_DATE}`);
    // console.log(`Expected Upfront Price: ${productInfo.prices[0].baseAmount}`);
    // console.log(`Expected Upfront Discount Amount: ${productInfo.prices[0].upfrontDiscountAmount}`);
    expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);
});

Then("the displayed refund date for the program is correct", async function () {
    const ACTUAL_REFUD_DATE = await startApplicationPage.refundEndDate.innerText();
    const EXPECTED_REFUD_DATE = productInfo.refundDate;
    // console.log(`Actual Refund Date: ${ACTUAL_REFUD_DATE}`);
    // console.log(`Expected Refund Date: ${EXPECTED_REFUD_DATE}`);
    expect(ACTUAL_REFUD_DATE).toBe(EXPECTED_REFUD_DATE);
});