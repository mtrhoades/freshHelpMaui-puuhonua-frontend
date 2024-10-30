import React from 'react';

const Menu = () => {
  const date = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todaysDate = `${daysOfWeek[date.getDay()]}, ${date.toLocaleDateString()}`;

  const meals = {
    breakfast: 'Pancakes with Scrambled Eggs',
    lunch: 'Ham and Cheese Sandwiches',
    dinner: 'Spaghetti with Marinera Sauce'
  };

  return (
    <div className="table-container">
      <h1>Daily Menu</h1>
      <h1>{todaysDate}</h1>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Food</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast</td>
            <td>{meals.breakfast}</td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td>{meals.lunch}</td>
          </tr>
          <tr>
            <td>Dinner</td>
            <td>{meals.dinner}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Menu;