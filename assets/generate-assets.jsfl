/**
 * Created by nyamogera on 2016/01/20.
 */
function exportAssets() {
    var pathArr = fl.getDocumentDOM().pathURI.split("/");
    var flaName = pathArr.pop();
    pathArr.pop();
    var exportClassPath = pathArr.join("/");
    var exportShapeClassPath = exportClassPath + "/core/app/assets/";
    var exportShapeDataClassPath = exportClassPath + "/core/app/data/";
    var exportPNGPath = pathArr.join("/");
    exportPNGPath = exportPNGPath + "/core/images/shape/";
    fl.trace(exportPNGPath);
    var assetList = new Array();
    var assetHash = "";
    var lib = fl.getDocumentDOM().library;
    var i = 0;
    for (var i = 0; i < lib.items.length; i++) {
        var o = lib.items[i];
        var name_1 = o.name.replace("assets/", "");
        if (o.itemType == "movie clip") {
            var pngPath = exportPNGPath + name_1 + ".png";
            o.exportToPNGSequence(pngPath);
            assetHash += "    this.shapeObjects[\"" + name_1 + "\"] = lib." + name_1 + "\n";
            assetList.push("\"" + name_1 + "\"");
        }
    }
    var date = new Date().toDateString();
    var assetArrayString = "[" + assetList.join(",") + "]";
    var generatingClass = "/**\n * Created by \u300C" + flaName + "\u300D/\u300Cgenerate-assets.jsfl\u300D on " + date + "\n */\n\nexport class ShapeGenerator {\n  shapeObjects:Object;\n\n  constructor () {\n    this.shapeObjects = new Object();\n" + assetHash + "\n  }\n\n  generateShape(id:string) {\n    return new this.shapeObjects[id]();\n  }\n}";
    FLfile.write(exportShapeClassPath + "shape-generator.ts", generatingClass);
    var generatingDataClass = "/**\n * Created by \u300C" + flaName + "\u300D/\u300Cgenerate-assets.jsfl\u300D on " + date + "\n */\n\nexport class ShapeData {\n  public assetList:string[];\n\n  constructor () {\n    this.assetList = " + assetArrayString + ";\n  }\n}";
    FLfile.write(exportShapeDataClassPath + "shape-data.ts", generatingDataClass);
}
exportAssets();
//# sourceMappingURL=generate-assets.js.map