import { Box } from '@mui/material';
import React from 'react';

function NutritionTab() {
    return (
        <Box>
            <div className='nutrion-facts'>
                <section class='performance-facts'>
                    <header class='performance-facts__header'>
                        <h1 class='performance-facts__title'>
                            Nutrition Facts
                        </h1>
                        <p>Serving Size 1/2 cup (about 82g)</p>
                        <p>Serving Per Container 8</p>
                    </header>
                    <table class='performance-facts__table'>
                        <thead>
                            <tr>
                                <th colspan='3' class='small-info'>
                                    Amount Per Serving
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan='2'>
                                    <b>Calories</b> 200
                                </th>
                                <td>Calories from Fat 130</td>
                            </tr>
                            <tr class='thick-row'>
                                <td colspan='3' class='small-info'>
                                    <b>% Daily Value*</b>
                                </td>
                            </tr>
                            <tr>
                                <th colspan='2'>
                                    <b>Total Fat</b> 14g
                                </th>
                                <td>
                                    <b>22%</b>
                                </td>
                            </tr>
                            <tr>
                                <td class='blank-cell'></td>
                                <th>Saturated Fat 9g</th>
                                <td>
                                    <b>22%</b>
                                </td>
                            </tr>
                            <tr>
                                <td class='blank-cell'></td>
                                <th>Trans Fat 0g</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th colspan='2'>
                                    <b>Cholesterol</b> 55mg
                                </th>
                                <td>
                                    <b>18%</b>
                                </td>
                            </tr>
                            <tr>
                                <th colspan='2'>
                                    <b>Sodium</b> 40mg
                                </th>
                                <td>
                                    <b>2%</b>
                                </td>
                            </tr>
                            <tr>
                                <th colspan='2'>
                                    <b>Total Carbohydrate</b> 17g
                                </th>
                                <td>
                                    <b>6%</b>
                                </td>
                            </tr>
                            <tr>
                                <td class='blank-cell'></td>
                                <th>Dietary Fiber 1g</th>
                                <td>
                                    <b>4%</b>
                                </td>
                            </tr>
                            <tr>
                                <td class='blank-cell'></td>
                                <th>Sugars 14g</th>
                                <td></td>
                            </tr>
                            <tr class='thick-end'>
                                <th colspan='2'>
                                    <b>Protein</b> 3g
                                </th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <table class='performance-facts__table--grid'>
                        <tbody>
                            <tr>
                                <td colspan='2'>Vitamin A 10%</td>
                                <td>Vitamin C 0%</td>
                            </tr>
                            <tr class='thin-end'>
                                <td colspan='2'>Calcium 10%</td>
                                <td>Iron 6%</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class='small-info'>
                        * Percent Daily Values are based on a 2,000 calorie
                        diet. Your daily values may be higher or lower depending
                        on your calorie needs:
                    </p>
                </section>
            </div>
        </Box>
    );
}

export default NutritionTab;
