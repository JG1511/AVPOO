import { Pessoa } from "../models/pessoa";

describe('Pessoa', () => {
  it('should create an instance', () => {
    expect(new Pessoa()).toBeTruthy();
  });
});
