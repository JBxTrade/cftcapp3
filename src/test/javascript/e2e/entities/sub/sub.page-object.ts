import { element, by, ElementFinder } from 'protractor';

export class SubComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-sub div table .btn-danger'));
  title = element.all(by.css('jhi-sub div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class SubUpdatePage {
  pageTitle = element(by.id('jhi-sub-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  idInput = element(by.id('field_id'));
  theRoleSelect = element(by.id('field_theRole'));
  imageInput = element(by.id('file_image'));

  titleFrSelect = element(by.id('field_titleFr'));
  titleEnSelect = element(by.id('field_titleEn'));
  descriptionFrSelect = element(by.id('field_descriptionFr'));
  descriptionEnSelect = element(by.id('field_descriptionEn'));
  unSubSelect = element(by.id('field_unSub'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setIdInput(id: string): Promise<void> {
    await this.idInput.sendKeys(id);
  }

  async getIdInput(): Promise<string> {
    return await this.idInput.getAttribute('value');
  }

  async setTheRoleSelect(theRole: string): Promise<void> {
    await this.theRoleSelect.sendKeys(theRole);
  }

  async getTheRoleSelect(): Promise<string> {
    return await this.theRoleSelect.element(by.css('option:checked')).getText();
  }

  async theRoleSelectLastOption(): Promise<void> {
    await this.theRoleSelect.all(by.tagName('option')).last().click();
  }

  async setImageInput(image: string): Promise<void> {
    await this.imageInput.sendKeys(image);
  }

  async getImageInput(): Promise<string> {
    return await this.imageInput.getAttribute('value');
  }

  async titleFrSelectLastOption(): Promise<void> {
    await this.titleFrSelect.all(by.tagName('option')).last().click();
  }

  async titleFrSelectOption(option: string): Promise<void> {
    await this.titleFrSelect.sendKeys(option);
  }

  getTitleFrSelect(): ElementFinder {
    return this.titleFrSelect;
  }

  async getTitleFrSelectedOption(): Promise<string> {
    return await this.titleFrSelect.element(by.css('option:checked')).getText();
  }

  async titleEnSelectLastOption(): Promise<void> {
    await this.titleEnSelect.all(by.tagName('option')).last().click();
  }

  async titleEnSelectOption(option: string): Promise<void> {
    await this.titleEnSelect.sendKeys(option);
  }

  getTitleEnSelect(): ElementFinder {
    return this.titleEnSelect;
  }

  async getTitleEnSelectedOption(): Promise<string> {
    return await this.titleEnSelect.element(by.css('option:checked')).getText();
  }

  async descriptionFrSelectLastOption(): Promise<void> {
    await this.descriptionFrSelect.all(by.tagName('option')).last().click();
  }

  async descriptionFrSelectOption(option: string): Promise<void> {
    await this.descriptionFrSelect.sendKeys(option);
  }

  getDescriptionFrSelect(): ElementFinder {
    return this.descriptionFrSelect;
  }

  async getDescriptionFrSelectedOption(): Promise<string> {
    return await this.descriptionFrSelect.element(by.css('option:checked')).getText();
  }

  async descriptionEnSelectLastOption(): Promise<void> {
    await this.descriptionEnSelect.all(by.tagName('option')).last().click();
  }

  async descriptionEnSelectOption(option: string): Promise<void> {
    await this.descriptionEnSelect.sendKeys(option);
  }

  getDescriptionEnSelect(): ElementFinder {
    return this.descriptionEnSelect;
  }

  async getDescriptionEnSelectedOption(): Promise<string> {
    return await this.descriptionEnSelect.element(by.css('option:checked')).getText();
  }

  async unSubSelectLastOption(): Promise<void> {
    await this.unSubSelect.all(by.tagName('option')).last().click();
  }

  async unSubSelectOption(option: string): Promise<void> {
    await this.unSubSelect.sendKeys(option);
  }

  getUnSubSelect(): ElementFinder {
    return this.unSubSelect;
  }

  async getUnSubSelectedOption(): Promise<string> {
    return await this.unSubSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class SubDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-sub-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-sub'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
