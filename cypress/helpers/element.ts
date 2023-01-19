function getElement(selector: string) {
  return () => cy.get(selector);
}

export { getElement };
