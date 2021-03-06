declare class SVGExporter {
  svg: Node;

  constructor(stage: createjs.Container, width: number, height: number);

  run(): void;
}

declare let cordova: any;

/**
 * SVG ファイルに出力するクラスです。
 */
export class ParticleExporter {

  private _exporter: SVGExporter;
  private _drawLayerContainer: createjs.Container;
  private _width: number;
  private _height: number;

  constructor(drawLayerContainer: createjs.Container) {
    this._drawLayerContainer = drawLayerContainer;
  }

  public runExport(width: number, height: number): Promise<any> {
    this._width  = width;
    this._height = height;

    return new Promise((onResolve, onReject) => {

      this._exporter = new SVGExporter(this._drawLayerContainer, this._width, this._height);
      this._exporter.run();

      setTimeout(() => {
        onResolve();
      }, 1);
    });
  }

  public runExportSP(cavas: HTMLCanvasElement): Promise<any> {
    return new Promise((onResolve, onReject) => {
      const base64 = cavas.toDataURL();
      cordova.base64ToGallery(
        base64,
        'img_',
        function (msg: any) {
          onResolve();
        },
        function (err: any) {
          onReject();
        }
      );
    });
  }

  public getSvgString(): string {
    const serializer = new XMLSerializer();
    return serializer.serializeToString(this._exporter.svg);
  }
}
