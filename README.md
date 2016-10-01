# claim-gatherer-webextension
## Description
This webextension is a utility tool to gather claim reports of IBM employees, which works on Chrome, Firefox, Opera and Edge.

## Installation
### From Source Code
#### For FireFox:
  1. Type **about:debugging** in address bar.
  2. Click *Load Temporay Add-on* button.
  3. Select manifest.json in root directory of the source code to open.

#### For Chrome:
  1. Type **chrome://extensions** in address bar.
  2. Check *Developer mode* box.
  3. Click *Load unpacked extension...* button.
  4. Select root directory of the source code to open.

### From Official Web App Store
(Not published yet)

## Usage
  1. Click the icon in browser menu as the following screenshot shows.
  ![screenshot](https://github.com/binartist/claim-gatherer-webextension/blob/master/screenshot.png)
  2. Make sure to enter correct intranet id and password in the two input fields. 
  3. A background task will deliver claim report to server automatically once you finhished **step 2**. But aslo you can do it manually by clicking *Deliver* button. 

## Workflow
![workflow](https://raw.githubusercontent.com/binartist/claim-gatherer-webextension/master/workflow.png)

## Note 
* Your claim-report will be downloaded from https://w3.ibm.comrvices/bicentral/protect/reportframework/personal/5848/report.xls?type=excel. If that URL doesn't work, you won't deliver the correct data to server.
* To see the claim-report you delivered, please visit https://cybergear.io/claim-gatherer.
