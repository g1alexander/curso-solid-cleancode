(() => {
  class HtmlElement {
    public static domReady: boolean = false;

    private _id: string;
    private type: string;
    private updatedAt: number;

    static createInput(id: string) {
      return new HtmlElement(id, "input");
    }

    constructor(id: string, type: string) {
      this._id = id;
      this.type = type;
      this.updatedAt = Date.now();
    }

    setType(type: string) {
      this.type = type;
      this.updatedAt = Date.now();
    }

    get id(): string {
      return this._id;
    }
  }
})();
