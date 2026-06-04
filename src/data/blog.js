export const blogPosts = [
  {
    id: 1,
    title: "What I Learned in 6 Months of Test Automation at EPAM",
    slug: "test-automation-learnings",
    date: "2026-06-04",
    category: "Career",
    readTime: "5 min read",
    excerpt: "Key insights from my internship journey: automation mindset, test design patterns, and why reliability matters in fintech.",
    content: `
# What I Learned in 6 Months of Test Automation at EPAM

When I started my internship at EPAM in January 2026, I thought test automation was just about clicking buttons and recording actions. Six months later, I realize it's much deeper.

## The Automation Mindset

Testing isn't about finding bugs—it's about preventing them. Every test is an investment in future confidence. This mindset changed how I write code now.

### Key Learnings:

**1. Good tests are maintainable**
- Reusable components over copy-paste code
- Clear naming conventions
- DRY principles apply to tests too

**2. API testing catches more issues faster**
- Selenium is great for UI, but REST Assured is a game-changer
- Test your APIs before testing UI
- Fewer false positives

**3. BDD brings teams together**
- Non-technical stakeholders understand Gherkin
- Tests become living documentation
- Reduces misalignment

**4. Test stability is an investment**
- Flaky tests are worse than no tests
- Wait strategies matter
- Good logging saves debugging time

**5. Maven + Git = powerful combination**
- Organized test structure scales better
- Version control for tests is essential
- CI/CD integration becomes natural

## What I'll Carry Forward

- Every line of code deserves a test
- Invest time in test architecture early
- Ask "why" before "how"
- Quality is a team responsibility

This experience shifted my perspective from "write code fast" to "write code that works, every time."

## For Fintech Companies

Why this matters: In fintech, reliability isn't optional. A failed transaction is a failed business. This is why companies invest heavily in QA. I've learned to think like this now.
    `,
    author: "Lakshay Pahuja",
    tags: ["automation", "testing", "career", "fintech"]
  },
  {
    id: 2,
    title: "API Testing Patterns with REST Assured",
    slug: "rest-assured-patterns",
    date: "2026-05-28",
    category: "Technical",
    readTime: "7 min read",
    excerpt: "Practical patterns for building reliable API test suites using REST Assured, TestNG, and clean assertion strategies.",
    content: `
# API Testing Patterns with REST Assured

Building reliable API tests is one of the most impactful things you can do for a product. Here's my approach after testing dozens of endpoints.

## Pattern 1: Request-Response Validation

The basics, but done right:

\`\`\`java
@Test
public void testCreateUserEndpoint() {
    given()
        .contentType(ContentType.JSON)
        .body(new User("Lakshay", "lakshay@example.com"))
    .when()
        .post("/api/users")
    .then()
        .statusCode(201)
        .body("email", equalTo("lakshay@example.com"))
        .body("id", notNullValue());
}
\`\`\`

## Pattern 2: Authentication Header Management

Security-first approach:

\`\`\`java
private static String authToken;

@BeforeClass
public static void authenticate() {
    authToken = given()
        .body(new LoginRequest("user", "password"))
        .when()
        .post("/api/auth/login")
        .then()
        .statusCode(200)
        .extract()
        .path("token");
}

@Test
public void testProtectedEndpoint() {
    given()
        .header("Authorization", "Bearer " + authToken)
    .when()
        .get("/api/profile")
    .then()
        .statusCode(200);
}
\`\`\`

## Pattern 3: Error Scenario Testing

The critical tests nobody writes:

\`\`\`java
@Test
public void testInvalidInputHandling() {
    given()
        .body(new User("", "invalid-email"))
    .when()
        .post("/api/users")
    .then()
        .statusCode(400)
        .body("errors", hasSize(greaterThan(0)));
}
\`\`\`

## Key Takeaways

1. Test both happy and sad paths
2. Validate response structure, not just values
3. Make tests readable and maintainable
4. Consider performance and timeout scenarios
5. Document why, not just what

This approach reduced our flaky tests by 70% in 3 months.
    `,
    author: "Lakshay Pahuja",
    tags: ["api-testing", "rest-assured", "java", "testing"]
  },
  {
    id: 3,
    title: "From Manual Checks to Automation Mindset",
    slug: "automation-mindset",
    date: "2026-05-15",
    category: "Career",
    readTime: "4 min read",
    excerpt: "How test automation changed my approach to writing code, debugging, and thinking about reliability.",
    content: `
# From Manual Checks to Automation Mindset

The biggest shift in my career so far: realizing that manual testing is not a safety net—it's a bottleneck.

## The Old Way (Manual Testing)

- Write feature
- Hope QA finds issues
- Fix bugs
- Repeat

This is reactive. It's also slower and more expensive.

## The New Way (Automation-First)

- Write feature
- Write tests immediately
- Run tests 1000x in CI/CD
- Ship with confidence

This is proactive. It's faster and cheaper.

## Why It Matters for Backend Development

Backend systems process data, store transactions, and handle concurrent requests. A single bug can cascade into data corruption or transaction failures.

For a fintech product, this is unacceptable.

So now, before I ship any code, I ask:
1. Does this code have automated tests?
2. Did I test error scenarios?
3. Can this break in production?
4. Did I check concurrent access?

## Practical Changes in My Code

**Before:**
\`\`\`java
public User createUser(String email) {
    return userRepository.save(new User(email));
}
\`\`\`

**After:**
\`\`\`java
public User createUser(String email) throws ValidationException {
    if (email == null || email.isEmpty()) {
        throw new ValidationException("Email cannot be empty");
    }
    if (!isValidEmail(email)) {
        throw new ValidationException("Invalid email format");
    }
    if (userRepository.existsByEmail(email)) {
        throw new ValidationException("User already exists");
    }
    return userRepository.save(new User(email));
}
\`\`\`

And then I test all 4 scenarios.

## The Real Cost Savings

- Manual testing of 50 scenarios: 2 hours
- Automated tests once written: 10 seconds every deployment
- Found bugs before production: priceless

## Going Forward

Automation isn't about replacing manual testing. It's about handling the repetitive, tedious work so humans can focus on creative, exploratory testing.

This is the future of quality assurance.
    `,
    author: "Lakshay Pahuja",
    tags: ["automation", "mindset", "quality", "backend"]
  }
];
