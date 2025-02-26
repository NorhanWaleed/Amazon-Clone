export const signup = async (name, email, phoneNumber, password) => {

  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
  
  const userExists = existingUsers.some(
    user => user.email === email || user.phoneNumber === phoneNumber
  );
  
  if (userExists) {
    throw new Error('User with this email or phone number already exists');
  }

  const newUser = { id: Date.now().toString(), name, email, phoneNumber, password };

  localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
  localStorage.setItem('currentUser', JSON.stringify(newUser));

  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

export const login = async (identifier, password) => {
  // Get users from storage
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Find user by email or phone
  const user = users.find(
    user => (user.email && user.email === identifier) || 
            (user.phoneNumber && user.phoneNumber === identifier)
  );
  
  if (!user) {
    throw new Error('User not found');
  }
  
  if (user.password !== password) {
    throw new Error('Incorrect password');
  }
  
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};