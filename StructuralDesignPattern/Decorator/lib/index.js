"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FileDataSource = /** @class */ (function () {
    function FileDataSource(fileNAme) {
    }
    FileDataSource.prototype.writeData = function (data) {
        console.log("write Data in fileDataSoure");
    };
    FileDataSource.prototype.readData = function () {
        console.log("read data fileDataSoure");
    };
    return FileDataSource;
}());
var DataSourceDecorator = /** @class */ (function () {
    function DataSourceDecorator(source) {
        this.wrappee = source;
    }
    DataSourceDecorator.prototype.writeData = function (data) {
        this.wrappee.writeData(data);
    };
    DataSourceDecorator.prototype.readData = function () {
        this.wrappee.readData();
    };
    return DataSourceDecorator;
}());
var EncryptionDecorator = /** @class */ (function (_super) {
    __extends(EncryptionDecorator, _super);
    function EncryptionDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EncryptionDecorator.prototype.writeData = function (data) {
        console.log("Encryt the data");
        _super.prototype.writeData.call(this, data);
    };
    EncryptionDecorator.prototype.readData = function () {
        console.log("reade data en encrpt");
        _super.prototype.readData.call(this);
    };
    return EncryptionDecorator;
}(DataSourceDecorator));
var CompressDecorator = /** @class */ (function (_super) {
    __extends(CompressDecorator, _super);
    function CompressDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompressDecorator.prototype.writeData = function (data) {
        console.log("compress the data");
        _super.prototype.writeData.call(this, data);
    };
    CompressDecorator.prototype.readData = function () {
        console.log("reade data compress");
        _super.prototype.readData.call(this);
    };
    return CompressDecorator;
}(DataSourceDecorator));
var a = new FileDataSource("file1");
// a.writeData("file1 data")
a = new CompressDecorator(a);
// a.writeData("file1 compressd")
a = new EncryptionDecorator(a);
a.writeData("file1 encrt");
