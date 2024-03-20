import Component from "cc/spreadsheetimporter/v0_33_1/Component";
import BaseController from "sap/fe/core/BaseController";
import ExtensionAPI from 'sap/fe/core/ExtensionAPI';
import Context from 'sap/ui/model/odata/v4/Context';

export async function upload(this: ExtensionAPI, pageContext: Context) {
    const view = this.getRouting().getView()
    const controller = view.getController() as BaseController
    view.setBusyIndicatorDelay(0)
    view.setBusy(true)
    const spreadsheetUpload = (await controller.getAppComponent().createComponent({
            usage: "spreadsheetImporter",
            async: true,
            componentData: {
                context: this,
                activateDraft: true
            }
        })) as Component
    spreadsheetUpload.openSpreadsheetUploadDialog()
    view.setBusy(false)
}