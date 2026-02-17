---
description: How to manually change a user's role to admin without using the UI
---

Follow these steps to elevate a user to the 'admin' role directly in the database.

### 1. Identify the User ID

Locate the `_id` of the user you wish to elevate. You can find this in your MongoDB database or via a profile API response.

### 2. Create the Administration Script

Create a new file called `scripts/set-admin.mjs` in your project root with the following content:

```javascript
import connectDB from "../app/utils/mongodb.js";
import { Profile } from "../models/profile.js";

async function setAdmin() {
  const userId = process.argv[2];

  if (!userId) {
    console.error("Error: Please provide a User ID as an argument.");
    console.log("Usage: node scripts/set-admin.mjs <USER_ID>");
    process.exit(1);
  }

  try {
    console.log("Connecting to database...");
    await connectDB();

    const updated = await Profile.findByIdAndUpdate(
      userId,
      { role: "admin" },
      { new: true },
    );

    if (!updated) {
      console.error("Error: User with ID " + userId + " not found.");
      process.exit(1);
    }

    console.log("Success! Role updated to admin for:");
    console.log(updated);
    process.exit(0);
  } catch (error) {
    console.error("Critical Error:", error.message);
    process.exit(1);
  }
}

setAdmin();
```

### 3. Execute the Script

Run the script using your environment variables from the `.env` file to ensure the database connection string is available.

```bash
export $(grep -v '^#' .env | xargs) && node scripts/set-admin.mjs <YOUR_USER_ID_HERE>
```

### 4. Cleanup

Once the user has been elevated, you can safely delete the script to keep your project clean.

```bash
rm scripts/set-admin.mjs
```
