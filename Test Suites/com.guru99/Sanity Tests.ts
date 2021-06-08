<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Sanity Tests</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>c43c53a6-7536-4e71-a67f-1ecba2c2fe98</testSuiteGuid>
   <testCaseLink>
      <guid>fe08e15a-a54e-486f-b1f0-125d53e555b1</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/com.guru99Tests/VerifyTitleOfHomePage</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>69aeaf9b-d4db-44ae-86e7-d9e76edaf158</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/com.guru99Tests/VerifyLoginToApplication</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>05b677b6-5cf7-4637-b1e3-daabb8f76011</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/com.guru99Tests/VerifyLoginToApplication - Data Driven</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>6e5672c9-000b-49a5-862e-8f4eeeaa3d49</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/InternalData</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>6e5672c9-000b-49a5-862e-8f4eeeaa3d49</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>1e19e23e-0555-4490-a544-4a0728c9c147</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>6e5672c9-000b-49a5-862e-8f4eeeaa3d49</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>20772644-977b-4eda-b96b-cae32640f9f9</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>cced6e00-12ff-4437-b2b4-0ffb5c521aeb</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/com.guru99Tests/VerifyLoginToApplication - Data Driven</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>82418c74-cf75-4fd4-9dcd-63c823dff7b7</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-2</value>
         </iterationEntity>
         <testDataId>Data Files/DataFromExcel</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>82418c74-cf75-4fd4-9dcd-63c823dff7b7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>1e19e23e-0555-4490-a544-4a0728c9c147</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>82418c74-cf75-4fd4-9dcd-63c823dff7b7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>20772644-977b-4eda-b96b-cae32640f9f9</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
