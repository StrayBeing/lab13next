import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMealsSlug() {
  await new Promise((resolve)=>setTimeout(resolve,2000));
  const stmt = db.prepare('SELECT * FROM meals');
  const meals = stmt.all();
  console.log('Dane z bazy:', meals); 
  return meals;
}
