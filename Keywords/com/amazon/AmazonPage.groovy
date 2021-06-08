package com.amazon

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import org.openqa.grid.web.servlet.handler.WebDriverRequestFactory
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.WebElement

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.driver.DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

public class AmazonPage {

	@Keyword
	def searchProduct(String product, String category) {

		WebUI.clearText(findTestObject('Object Repository/com.amazon/Page_AmazonHomepage/input_search-box'))

		WebUI.sendKeys(findTestObject('Object Repository/com.amazon/Page_AmazonHomepage/input_search-box'), product)

		WebUI.selectOptionByLabel(findTestObject('Object Repository/com.amazon/Page_AmazonHomepage/select_category'), category, false)


		WebUI.click(findTestObject('Object Repository/com.amazon/Page_AmazonHomepage/input_search-submit-button'))
	}

	@Keyword
	def GetNthProduct(int index) {

		String xpathExpression = String.format("//div[@data-component-type='s-search-result'][%d]", index)

		TestObject nthProduct = new TestObject();

		nthProduct.addProperty("xpath", ConditionType.EQUALS, xpathExpression)

		println(WebUI.getText(nthProduct))
	}

	@Keyword
	def GetAllProducts() {
		String xpathExpression = "//div[@data-component-type='s-search-result']";

		WebDriver driver = DriverFactory.webDriver;

		List<WebElement> allProducts = driver.findElements(By.xpath(xpathExpression));

		for(WebElement product : allProducts) {

			println(product.getText())

			println("----------------------------------------------------")
		}
	}
}
