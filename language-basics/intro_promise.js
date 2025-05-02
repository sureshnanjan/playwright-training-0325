// Basic Promise Structure
console.log("This is the start")
const simplePromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    const success = true;
    
    if (success) {
      resolve("Operation completed successfully!");  // Promise fulfilled
    } else {
      reject("Operation failed!");  // Promise rejected
    }
  });
  
  // Using the Promise
  simplePromise
    .then(result => console.log(result))  // Handles successful completion
    .catch(error => console.error(error)); // Handles errors

  async function myfunc(params) {
    const result = await simplePromise
    console.log("Inside the async")
    console.log(result)
  } 

  myfunc()
  console.log("This is the end")
  /**

  // Real-world example: Fetching data
  function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      // Simulating network request with setTimeout
      setTimeout(() => {
        if (userId > 0) {
          const userData = {
            id: userId,
            name: 'John Doe',
            email: 'john@example.com'
          };
          resolve(userData);
        } else {
          reject(new Error('Invalid user ID'));
        }
      }, 1000);
    });
  }
  
  // Using the fetch function
  fetchUserData(123)
    .then(user => {
      console.log('User data retrieved:', user);
      return user.name; // Return value is wrapped in a new Promise
    })
    .then(name => console.log('User name:', name)) // Promise chaining
    .catch(error => console.error('Error:', error.message))
    .finally(() => console.log('Operation completed')); // Executes regardless of success/failure
  
  // Promise.all - Wait for multiple promises to complete
  const promise1 = Promise.resolve('First');
  const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 100));
  const promise3 = fetchUserData(456);
  
  Promise.all([promise1, promise2, promise3])
    .then(values => {
      console.log('All promises resolved:', values);
    })
    .catch(error => console.error('At least one promise rejected:', error));
  
  // Promise.race - Returns the first promise to resolve or reject
  Promise.race([
    new Promise(resolve => setTimeout(() => resolve('Fast operation'), 100)),
    new Promise(resolve => setTimeout(() => resolve('Slow operation'), 500))
  ])
    .then(result => console.log('First to complete:', result));
  
  // Async/await - Modern syntax for working with Promises
  async function getUserDetails(userId) {
    try {
      const user = await fetchUserData(userId); // Waits for Promise to resolve
      console.log('User retrieved:', user);
      
      // Sequential async operations
      const permissions = await fetchUserPermissions(user.id);
      const activity = await fetchUserActivity(user.id);
      
      return {
        user,
        permissions,
        activity
      };
    } catch (error) {
      console.error('Error in async function:', error.message);
      throw error; // Re-throw to propagate to caller
    }
  }
  
  // Helper functions for the example above
  function fetchUserPermissions(userId) {
    return new Promise(resolve => {
      setTimeout(() => resolve(['read', 'write', 'admin']), 500);
    });
  }
  
  function fetchUserActivity(userId) {
    return new Promise(resolve => {
      setTimeout(() => resolve(['login: yesterday', 'post: today']), 700);
    });
  }
  
  // Using the async function
  getUserDetails(789)
    .then(details => console.log('Complete user details:', details))
    .catch(error => console.error('Failed to get user details:', error));
  
  // Error handling with async/await
  async function handleErrors() {
    try {
      const user = await fetchUserData(-1); // Will reject
      console.log(user); // This line won't execute
    } catch (error) {
      console.error('Caught error in async function:', error.message);
    }
  }
  
  handleErrors();
  
  // Converting callbacks to Promises
  function readFileCallback(filename, callback) {
    // Simulating reading a file with a callback
    setTimeout(() => {
      if (filename.endsWith('.txt')) {
        callback(null, 'File content here');
      } else {
        callback(new Error('Invalid file format'));
      }
    }, 1000);
  }
  
  // Converting to Promise
  function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
      readFileCallback(filename, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  // Using the Promise version
  readFilePromise('document.txt')
    .then(content => console.log('File content:', content))
    .catch(error => console.error('File error:', error.message));
    */