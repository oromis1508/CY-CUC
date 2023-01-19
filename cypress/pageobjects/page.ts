export abstract class Page {
  protected abstract url: string;
  public open() {
    return cy.visit(this.url);
  }
}
