import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMealsSlug() {
  const stmt = db.prepare('SELECT * FROM meals');
  const meals = stmt.all();
  console.log('Dane z bazy:', meals);  // Sprawdzenie danych
  return meals;
}
