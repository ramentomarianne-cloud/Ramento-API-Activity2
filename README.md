1. Markdown
2. # RESTful API Activity - [Marianne Ramento]
3. ## Best Practices Implementation
4. **1. Environment Variables:**
5. - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
6. - Answer: We put `BASE_URI` in `.env` instead of hardcoding it because environment variable seperates configuration from code.
7. **2. Resource Modeling:**
8. - Why did we use plural nouns (e.g., `/dishes`) for our routes?
9. - Answer: We use plural nouns for routes because they represent a collection of resources.
10. **3. Status Codes:**
11. - When do we use `201 Created` vs `200 OK`?
12. - Why is it important to return `404` instead of just an empty array or a generic error?
13. - Answer: We use 201 when new resource is successfully created on the server like adding new dish with POST request. Next we use 200 OK when an existing resource is succesfully
    - retrieved or updated such as getting all dishes with a GET or updatting a dish with PUT request.
14. - Answer: Its important because HTTP status code communicate meaning not just data. Its crucial for clean communication between client and server.
15. **4. Testing:**
16. - <img width="1366" height="728" alt="Get-Request" src="https://github.com/user-attachments/assets/54da0161-438e-4cab-a183-8f4bbc4c8b2c" />
17. Why did I choose to Embed the Review?
18. Answer: A review is short and belongs strictly to that dish.
19. Why did I choose to Reference the Chef?
20. Answer: A Chef exists even if they aren't cooking. Multiple dishes can share one Chef.
21. What is the difference between Authentication and Authorization in our code?
22. Answer: Authentication verifies the user’s identity through login credentials, while authorization determines what actions or resources the authenticated user is allowed to access based on their role.
23. Why did we use bcryptjs instead of saving passwords as plain text in MongoDB?
24. Answer: We use bcryptjs to hash passwords so they are stored securely in the database instead of plain text, protecting user data if the database is compromised.
25. What does the protect middleware do when it receives a JWT from the client?
26. Answer: The protect middleware verifies the JWT from the request header, decodes the user information, and allows access to the route if the token is valid.


