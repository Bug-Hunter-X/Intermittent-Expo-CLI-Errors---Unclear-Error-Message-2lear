The issue might stem from outdated dependencies, conflicting CLI tools, or environment problems.  A thorough check of your `package.json` file and `package-lock.json` is recommended. Consider the following steps:

1. **Update dependencies:**
   ```bash
npm update
```

2. **Clean the project:**
   ```bash
npm cache clean --force
rm -rf node_modules
rm -rf .expo
rm -rf ios/build
rm -rf android/build
```

3. **Check your system environment:** Make sure you have the right Node.js and Expo CLI versions installed and that no environment variable conflicts exist.

4. **Restart your machine:** A simple restart can sometimes resolve mysterious issues. 

5. **Try a different terminal:**  Some terminal applications may have issues. If possible, test in a new terminal environment.

If none of these solutions work, please provide more context about your project's setup, system environment, and the full error logs for a more thorough analysis.