export interface ModelInput {
  system?: string;
  user: string;
  context?: string;
}

export interface ModelAdapter {
  invoke(input: ModelInput): Promise<string>;
}

export class MockAdapter implements ModelAdapter {
  async invoke({ user }: ModelInput): Promise<string> {
    return `✧ Echo: ${user.slice(0, 80)}`;
  }
}
