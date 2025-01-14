import styles from './page.module.css';
import { getMealsSlug } from '../../../lib/meals-slug';  

// This function generates static parameters for the dynamic route
export async function generateStaticParams() {
  const meals = await getMealsSlug();
  return meals.map(meal => ({
    someName: meal.slug,  
  }));
}

// The main component for rendering the meal details
export default async function MealDetailPage({ params }) {
  // Await the params if needed (params is async in this context)
  const { someName } = await params;  // Awaiting params to ensure it's resolved

  const meals = await getMealsSlug();
  const meal = meals.find(meal => meal.slug === someName);  

  if (!meal) {
    console.log('Slug z URL:', someName);
    console.log('Slug z bazy:', meals.map(meal => meal.slug));
    return <h1>Posiłek nie został znaleziony.</h1>;
  }

  console.log('Slug w URL:', someName);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={meal.image} alt={meal.title} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            Created by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </div>
      <div className={styles.instructions}>
        <h2>Instructions</h2>
        <p>{meal.instructions}</p>
      </div>
    </div>
  );
}
