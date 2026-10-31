contenidoEntrada = `
<section>
    <h2>1. Enteras</h2>
    <h3>¿Cómo se resuelven?</h3>
    <p>Para empezar nos damos cuenta que este tipo de ecuaciones no tiene denominadores. Se agrupan las x de un lado y los números del otro lado.</p>
    
    <h3>Representación:</h3>
    <ul>
        <li>ax + b = cx + d</li>
        <li>(a - c)x = d - b -> x = (d - b) / (a - c)</li>
    </ul>

    <h3>Ejemplo</h3>
    <p>5x - 7 = 3x + 9</p>
    <ol>
        <li>5x - 3x = 9 + 7</li>
        <li>2x = 16</li>
        <li>x = 16 / 2 </li>
        <li>x = 8</li>
    </ol>

    <h3>Comprobación:</h3>
    <p>5(8) - 7 = 3(8) + 9</p>
    <p>40 - 7 = 24 + 9</p>
    <p>33 = 33 </p>
</section>

<section>
    <h2>2. Fraccionarias</h2>
    <h3>¿Cómo resolverlas?</h3>
    <p>Tienen la incógnita en el numerador o denominadores numéricos. Se multiplica toda la ecuación por el mínimo común múltiplo (mcm) de los denominadores para eliminarlos.</p>

    <h3>Representación:</h3>
    <ul>
        <li>x/a + x/b = c</li>
        <li>Se usa el mcm(a, b) · (x/a + x/b) = mcm(a, b) · c</li>
    </ul>

    <h3>Ejemplo:</h3>
    <p>x/2 + x/3 = 10</p>
    <ol>
        <li>Se usa el mcm(2, 3) = 6</li>
        <li>6(x/2) + 6(x/3) = 6(10)</li>
        <li>3x + 2x = 60 → 5x = 60</li>
        <li>x = 60 ÷ 5 = 12</li>
    </ol>

    <h3>Comprobación:</h3>
    <ul>
        <li>Izquierdo: 12/2 + 12/3 = 6 + 4 = 10</li>
        <li>Derecho: 10</li>
        <li>10 = 10 </li>
    </ul>
</section>

<section>
    <h2>3. Con signos de agrupación</h2>
    <h3>¿Cómo resolverlas?</h3>
    <p>Contienen paréntesis, corchetes o llaves. Primero se eliminan con la propiedad distributiva (cuidado con los signos negativos), luego se reducen términos semejantes y se despeja.</p>

    <h3>Representación:</h3>
    <ul>
        <li>a(x + b) − c(x + d) = e</li>
        <li>a(x + b) = ax + ab</li>
        <li>−c(x + d) = −cx − cd</li>
    </ul>

    <h3>Ejemplo:</h3>
    <p>4(x − 3) − 2(x + 1) = 6</p>
    <ol>
        <li>4x − 12 − 2x − 2 = 6</li>
        <li>2x − 14 = 6</li>
        <li>2x = 20</li>
        <li>x = 20 ÷ 2 = 10</li>
    </ol>

    <h3>Comprobación:</h3>
    <ul>
        <li>Izquierdo: 4(10 − 3) − 2(10 + 1) = 4(7) − 2(11) = 28 − 22 = 6</li>
        <li>Derecho: 6</li>
        <li>6 = 6 </li>
    </ul>
</section>
<section>
    <h2>4. Con literales</h2>
    <h3>¿Cómo resolverlas?</h3>
    <p>Además de la incógnita hay otras letras que se tratan como constantes. Se despeja igual que una ecuación numérica y el resultado es una fórmula (con a ≠ 0).</p>

    <h3>Representación:</h3>
    <ul>
        <li>ax + b = c</li>
        <li>x = (c − b) / a</li>
    </ul>

    <h3>Ejemplo:</h3>
    <p>ax + b = c</p>
    <ol>
        <li>ax = c − b</li>
        <li>x = (c - b) / a</li>
    </ol>

    <h3>Comprobación (con a = 3, b = 5, c = 20):</h3>
    <ul>
        <li>x = (20 − 5) / 3 = 5</li>
        <li>Sustituyo: 3(5) + 5 = 15 + 5 = 20</li>
        <li>20 = c </li>
    </ul>
</section>
<section>
    <h2>Problema de planteamiento</h2>
    <p><strong>Enunciado:</strong> Un programador corre una suite de pruebas que tarda 4 minutos por corrida, más 3 minutos de configuración inicial (una sola vez). Si en total ocupó 31 minutos, ¿cuántas veces corrió la suite?</p>

    <h3>Paso 1. Incógnita</h3>
    <p>x = número de veces que corrió la suite.</p>

    <h3>Paso 2. Traducción</h3>
    <ul>
        <li>4 minutos por corrida → 4x</li>
        <li>3 minutos de configuración → + 3</li>
        <li>31 minutos en total → = 31</li>
    </ul>

    <h3>Paso 3. Ecuación</h3>
    <p>4x + 3 = 31</p>

    <h3>Paso 4. Solución</h3>
    <ol>
        <li>4x = 31 − 3</li>
        <li>4x = 28</li>
        <li>x = 28 ÷ 4 = 7</li>
    </ol>

    <h3>Paso 5. Validación contra el enunciado</h3>
    <ul>
        <li>7 corridas × 4 min = 28 min</li>
        <li>28 min + 3 min de configuración = 31 min ✔</li>
        <li>7 es un entero positivo, tiene sentido porque no se puede correr 2.5 veces.</li>
    </ul>
    <p>Respuesta: corrió la suite 7 veces.</p>

</section>`;
// para cerrar poner siempre esto: `;, sino mata el código.