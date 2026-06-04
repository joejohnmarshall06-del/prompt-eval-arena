export class PromptArena {
  constructor(cases) { this.cases = cases; }
  run(candidate) {
    const results = this.cases.map((item) => {
      const answer = candidate(item.input);
      const missing = item.mustContain.filter((phrase) => !answer.toLowerCase().includes(phrase.toLowerCase()));
      return { id: item.id, answer, passed: missing.length === 0, missing };
    });
    const pass = results.filter((r) => r.passed).length;
    return { score: Math.round(pass / results.length * 100), results };
  }
}
