import styles from './faq.module.scss';

export const Faq2 = () => {
     return(
          <table className={styles.table}>
               <tr>
                    <th>S/N</th> <th>ITEMS</th> <th>QTY</th> <th>COST</th>
               </tr>

               <tr>
                    <td>1</td> <td>RADIO</td> <td>1</td> <td>45,000/55,000</td>
               </tr>

               <tr>
                    <td>2</td> <td>WIRELESS ACCESS POINT</td> <td>1</td> <td>27,000</td>
               </tr>

               <tr>
                    <td>3</td> <td>COST OF INSTALLATION</td> <td>1</td> <td>6,000/12,000</td>
               </tr>

               <tr>
                    <td>4</td> <td>SUBSCRIPTION</td> <td></td> <td>This depends on the package you chose</td>
               </tr>
          </table>
     )
} 