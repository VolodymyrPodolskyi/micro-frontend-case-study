import { db } from '../../src/services/db';

async function migrate() {
  try {
    await db.migrate.latest();
    console.log('Migration completed');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrate(); 