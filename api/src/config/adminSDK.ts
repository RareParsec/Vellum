import admin from 'firebase-admin';
import serviceAccount from './service_acc.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;
