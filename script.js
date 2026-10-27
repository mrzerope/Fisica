const topics=[
{id:1,cat:'mecanica',title:'Biomecánica y medición',tag:'Sesión 7',desc:'Aplicación de la mecánica al cuerpo humano: medición, errores, movimiento, fuerza, trabajo, energía, estabilidad y palancas.',points:['Altura promedio, error absoluto medio y error relativo.','Movimiento desde el reposo y aceleración.','Fuerza, peso, trabajo y energía cinética.','Base de sustentación, estabilidad y aplicaciones biomecánicas.'],explain:'En el caso de biomecánica se conectan magnitudes físicas con situaciones reales del cuerpo humano. Primero se mide y se estima el error; luego se analiza el movimiento con aceleración, la fuerza con F=ma y el trabajo/energía para interpretar el desplazamiento. La estabilidad mejora cuando aumenta la base de sustentación y el centro de gravedad se mantiene dentro de ella.'},
{id:2,cat:'mecanica',title:'Equilibrio y diagramas de cuerpo libre',tag:'Sesión 12 / Laboratorio',desc:'Primera condición de equilibrio y análisis de fuerzas mediante componentes.',points:['Equilibrio estático: reposo.','Equilibrio cinético: velocidad constante.','ΣF⃗=0, ΣFx=0 y ΣFy=0.','Peso: F=mg, con g=9,80 m/s².'],explain:'Un cuerpo está en equilibrio de traslación cuando la fuerza resultante es cero. En un problema real se dibuja el diagrama de cuerpo libre, se descomponen las fuerzas en x e y y se verifica que ambas sumas sean cero.'},
{id:3,cat:'fluidos',title:'Presión y circulación sanguínea',tag:'Sesión 9',desc:'Presión, presión arterial, flujo y gasto cardíaco.',points:['P=F/A.','Conversión médica: 1 mmHg≈133,3 Pa.','PAM=D+(S−D)/3.','Q=V/t y GC=VS×FC.'],explain:'La presión es fuerza por unidad de área. En circulación, una diferencia de presión impulsa la sangre. El flujo mide cuánto volumen pasa por unidad de tiempo y el gasto cardíaco expresa cuánto bombea el corazón por minuto.'},
{id:4,cat:'fluidos',title:'Flujo, Poiseuille y Bernoulli',tag:'Sesión 10',desc:'Flujo laminar/turbulento, resistencia vascular y transporte en vasos.',points:['Ley de Poiseuille: Q=(πr⁴ΔP)/(8ηL).','El radio tiene efecto r⁴.','RVP=ΔP/Q.','Bernoulli relaciona presión, velocidad y altura.'],explain:'Poiseuille muestra que el radio es decisivo: duplicar r multiplica el flujo por 16 si lo demás permanece constante. La resistencia vascular aumenta cuando el flujo encuentra mayor oposición. Bernoulli interpreta el flujo desde la conservación de energía.'},
{id:5,cat:'fluidos',title:'Continuidad y viscosidad',tag:'Sesiones 9–10',desc:'Conservación del flujo y comportamiento de la sangre en vasos.',points:['A₁v₁=A₂v₂ para flujo estacionario incomprensible.','Viscosidad η como oposición interna al flujo.','ν=η/ρ como viscosidad cinemática.','Reynolds: Re=ρvd/η para distinguir régimen.'],explain:'Si el área disminuye, la velocidad debe aumentar para conservar el caudal. La viscosidad representa la resistencia interna del fluido. El número de Reynolds compara efectos inerciales y viscosos y ayuda a identificar si el flujo tiende a ser laminar o turbulento.'},
{id:6,cat:'gases',title:'Respiración y leyes de los gases',tag:'Sesiones 13–14',desc:'Presión, ventilación pulmonar y comportamiento de gases.',points:['P=F/A.','Boyle: P₁V₁=P₂V₂.','Charles: V₁/T₁=V₂/T₂.','Gay-Lussac: P₁/T₁=P₂/T₂.','Henry: pᵢ=CᵢkH.'],explain:'En la respiración, cambios de volumen producen cambios de presión. Boyle se usa cuando la temperatura es constante; Charles cuando la presión es constante; Gay-Lussac cuando el volumen es constante. Siempre convierte °C a Kelvin antes de aplicar las leyes.'},
{id:7,cat:'gases',title:'Volúmenes y capacidades pulmonares',tag:'Sesión 15',desc:'Volumen corriente, reservas, volumen residual y capacidades pulmonares.',points:['Volumen corriente ≈500 mL en reposo.','VRI≈2500 mL.','VRE≈1100–1200 mL.','VR≈1200 mL.','CV=VC+VRI+VRE.'],explain:'Los volúmenes pulmonares describen cuánto aire entra, sale o permanece en los pulmones. La capacidad vital suma el volumen corriente y las dos reservas. La ventilación minuto puede estimarse como volumen corriente por frecuencia respiratoria.'},
{id:8,cat:'termo',title:'Termodinámica del cuerpo humano',tag:'Sesión 16',desc:'Temperatura, calor, trabajo, energía interna, procesos y termorregulación.',points:['1 cal=4,18 J.','Trabajo isobárico: W=PΔV.','Isocórico: W=0.','Adiabático: Q=0.','Primera ley: ΔU=Q−W (W hecho por el sistema).'],explain:'La termodinámica estudia cómo se intercambian calor y trabajo. En la convención usada aquí, W es el trabajo realizado por el sistema: ΔU=Q−W. En un proceso isocórico no cambia el volumen, por lo que no hay trabajo de expansión.'},
{id:9,cat:'termo',title:'Metabolismo basal y transferencia de calor',tag:'Sesión 16',desc:'Metabolismo basal, evaporación, conducción, convección y radiación.',points:['FAO 10–18 años: ecuaciones por sexo.','Harris-Benedict para MB.','Evaporación: 1 g de agua ≈2,4 kJ disipados.','Transferencia: conducción, convección, radiación y evaporación.'],explain:'El cuerpo produce calor por metabolismo y debe equilibrar producción y pérdida. La evaporación del sudor es muy eficaz porque requiere energía para cambiar el agua de líquido a vapor.'},
{id:10,cat:'ondas',title:'Movimiento Armónico Simple y ondas',tag:'Sesión 19',desc:'Oscilaciones fisiológicas, frecuencia, período, frecuencia angular y ultrasonido.',points:['T=1/f.','ω=2πf.','x(t)=A cos(ωt+φ₀).','vmax=Aω.','λ=v/f.'],explain:'El MAS permite modelar oscilaciones como la respiración o el movimiento periódico de una pared arterial. Mayor frecuencia implica menor período. En ultrasonido, λ=v/f: al aumentar la frecuencia disminuye la longitud de onda y aumenta la resolución, aunque disminuye la penetración.'},
{id:11,cat:'electricidad',title:'Electricidad aplicada al sistema nervioso',tag:'Sesión 20',desc:'Carga, corriente, voltaje, resistencia y leyes eléctricas.',points:['I=q/t.','Ley de Ohm: V=RI.','Joule: E=RI²t.','Coulomb: F=kq₁q₂/d².','Campo: E=F/q.','Potencial: V=W/q.'],explain:'La actividad eléctrica del cuerpo depende del movimiento de iones. La ley de Ohm relaciona voltaje, corriente y resistencia; Joule relaciona corriente con energía térmica; Coulomb explica la interacción entre cargas.'},
{id:12,cat:'bioelectricidad',title:'Potencial de membrana e impulso nervioso',tag:'Sesiones 21–22',desc:'Nernst, Goldman-Hodgkin-Katz, canales iónicos y transmisión del impulso nervioso.',points:['Nernst a 37 °C: E≈(±61/z)log(Cmayor/Cmenor).','GHK incorpora permeabilidades de varios iones.','La mielinización aumenta la velocidad de conducción.','Velocidad: v=d/t.','Potencial de reposo neuronal ≈−70 mV.'],explain:'El potencial de membrana aparece por la distribución desigual de iones y la permeabilidad selectiva. Nernst estima el potencial de equilibrio de un ion; GHK extiende el análisis a varios iones y sus permeabilidades. El impulso nervioso alterna despolarización y repolarización.'}
];

const formulas=[
['Mecánica','Altura promedio: h̄=(h₁+h₂+h₃)/3','Error absoluto medio: Ea=Σ|hᵢ−h̄|/n','Error relativo: Er=(Ea/h̄)×100 %','Velocidad: v=Δx/Δt','Aceleración: a=(vf−vi)/Δt','Fuerza: F=ma','Peso: F=mg','Trabajo: W=Fd','Energía cinética: Ec=½mv²'],
['Equilibrio','Equilibrio: ΣF⃗=0','ΣFx=0','ΣFy=0','Peso: F=mg, g=9,80 m/s²'],
['Fluidos','Presión: P=F/A','Flujo: Q=V/t','Gasto cardíaco: GC=VS×FC','Continuidad: A₁v₁=A₂v₂','Poiseuille: Q=(πr⁴ΔP)/(8ηL)','RVP=ΔP/Q','Presión arterial: PA=GC×RVP','Bernoulli: P+½ρv²+ρgh=constante','Reynolds: Re=ρvd/η','Viscosidad cinemática: ν=η/ρ'],
['Gases y respiración','Boyle: P₁V₁=P₂V₂','Charles: V₁/T₁=V₂/T₂','Gay-Lussac: P₁/T₁=P₂/T₂','Henry: pᵢ=CᵢkH','Gas ideal: PV=nRT','T(K)=T(°C)+273,15','Ventilación minuto: V̇E=VC×f','Capacidad vital: CV=VRI+VC+VRE','Capacidad pulmonar total: CPT=CV+VR'],
['Termodinámica','Conversión: 1 cal=4,18 J','Trabajo isobárico: W=PΔV','Primera ley: ΔU=Q−W','Isotérmico: ΔU=0','Isocórico: W=0','Adiabático: Q=0','Evaporación del agua: ≈2,4 kJ/g'],
['Ondas y MAS','T=1/f','ω=2πf','T=2π/ω','x(t)=A cos(ωt+φ₀)','vmax=Aω','λ=v/f'],
['Electricidad','I=q/t','V=RI','E=RI²t','F=kq₁q₂/d²','Campo eléctrico: E=F/q','Potencial eléctrico: V=W/q'],
['Bioelectricidad','Nernst (37 °C): E≈(±61/z)log(Cmayor/Cmenor)','GHK: Vm≈61,5 log[(PKK₀+PNaNa₀+PClClᵢ)/(PKKᵢ+PNaNaᵢ+PClCl₀)]','Conducción: v=d/t']
];

const practices=[
['Caso I — altura promedio','h₁=1,74 m; h₂=1,76 m; h₃=1,75 m.','h̄=1,75 m'],
['Caso I — aceleración','Parte del reposo y llega a 9 m/s en 6 s.','a=1,50 m/s²'],
['Caso I — fuerza','m=70 kg y a=1,50 m/s².','F=105 N'],
['Caso I — trabajo','Para recorrer 5 m a partir del reposo, usa la fuerza resultante del modelo simplificado.','W=F·d'],
['Circulación — gasto cardíaco','VS=70 mL/latido y FC=70 lat/min.','GC=4900 mL/min≈4,9 L/min'],
['Respiración — ventilación','VC=500 mL y f=12 respiraciones/min.','V̇E=6000 mL/min=6 L/min'],
['MAS — respiración','15 respiraciones/min.','f=0,25 Hz; ω≈1,57 rad/s'],
['Electricidad — membrana','V=70 mV e I=0,7 nA.','R=V/I≈100 MΩ']
];

const questions=[
['mecanica','Si h₁=1,74 m, h₂=1,76 m y h₃=1,75 m, ¿cuál es la altura promedio?',['1,70 m','1,74 m','1,75 m','1,76 m'],2,'Se suman las tres mediciones y se dividen entre 3.'],
['mecanica','Un cuerpo parte del reposo y alcanza 9 m/s en 6 s. ¿Cuál es su aceleración media?',['0,67 m/s²','1,50 m/s²','3,00 m/s²','54 m/s²'],1,'a=(vf−vi)/Δt=(9−0)/6=1,5 m/s².'],
['mecanica','Para m=70 kg y a=1,5 m/s², ¿qué fuerza resultante corresponde?',['46,7 N','68,6 N','105 N','686 N'],2,'F=ma=70×1,5=105 N.'],
['mecanica','¿Qué fórmula representa el peso de un cuerpo?',['P=F/A','F=mg','W=Fd','Ec=½mv²'],1,'El peso es la fuerza gravitatoria: F=mg.'],
['mecanica','¿Qué expresión corresponde al trabajo cuando la fuerza es paralela al desplazamiento?',['W=F/d','W=Fd','W=m/v','W=Pt²'],1,'En este caso W=Fd.'],
['mecanica','¿Cuál es la energía cinética de una masa m que se mueve con velocidad v?',['Ec=mv','Ec=½mv²','Ec=mgh','Ec=F/A'],1,'La energía cinética depende de la masa y del cuadrado de la velocidad.'],
['mecanica','Si se amplía la base de sustentación, en general la estabilidad del cuerpo:',['disminuye siempre','aumenta','se vuelve cero','no puede analizarse'],1,'Una base mayor favorece la estabilidad.'],
['mecanica','Un objeto recorre 5 m bajo una fuerza constante de 20 N paralela al movimiento. ¿Trabajo?',['4 J','25 J','100 J','400 J'],2,'W=Fd=20×5=100 J.'],
['mecanica','Si vi=4 m/s, vf=10 m/s y Δt=3 s, ¿a?',['2 m/s²','3 m/s²','6 m/s²','14 m/s²'],0,'a=(10−4)/3=2 m/s².'],
['mecanica','¿Qué error se obtiene al dividir el error absoluto entre el valor promedio y multiplicar por 100?',['Error sistemático','Error relativo porcentual','Error de escala','Error de calibración'],1,'Es el error relativo expresado en porcentaje.'],
['mecanica','¿Qué ley relaciona directamente fuerza, masa y aceleración?',['Primera ley de Newton','Segunda ley de Newton','Ley de Coulomb','Ley de Ohm'],1,'F=ma corresponde a la segunda ley de Newton.'],
['mecanica','Si una persona se mueve con velocidad constante en línea recta, la fuerza resultante es:',['máxima','igual a mg','cero','negativa siempre'],2,'Velocidad constante implica equilibrio cinético y fuerza neta cero.'],
['mecanica','¿Qué elemento de una palanca actúa como punto de apoyo?',['Resistencia','Potencia','Fulcro','Carga'],2,'El fulcro es el punto de apoyo.'],
['mecanica','En el caso de biomecánica, aumentar la base de sustentación de 0,6 m a 0,8 m favorece:',['menor estabilidad','mayor estabilidad','mayor masa','menor peso'],1,'Una base más amplia aumenta el margen de estabilidad.'],
['mecanica','Si una fuerza de 50 N actúa 4 m en la misma dirección del movimiento, el trabajo es:',['12,5 J','46 J','200 J','400 J'],2,'W=50×4=200 J.'],
['fluidos','La presión se define como:',['P=A/F','P=F/A','P=V/t','P=ρv'],1,'La presión es fuerza por unidad de área.'],
['fluidos','¿Aproximadamente cuánto equivale 1 mmHg según la clase?',['1,33 Pa','13,3 Pa','133,3 Pa','1333 Pa'],2,'La equivalencia usada es 1 mmHg≈133,3 Pa.'],
['fluidos','Para 120/80 mmHg, la presión arterial media aproximada es:',['40 mmHg','80 mmHg','93,3 mmHg','120 mmHg'],2,'PAM=80+(120−80)/3≈93,3 mmHg.'],
['fluidos','El flujo Q se calcula como:',['Q=V/t','Q=F/A','Q=ma','Q=IR'],0,'El caudal es volumen dividido entre tiempo.'],
['fluidos','El gasto cardíaco se calcula como:',['GC=VS×FC','GC=P/A','GC=Q/R','GC=ρgh'],0,'GC es volumen sistólico por frecuencia cardíaca.'],
['fluidos','La ecuación de continuidad para un fluido ideal es:',['P₁V₁=P₂V₂','A₁v₁=A₂v₂','V=RI','W=Fd'],1,'La continuidad expresa conservación del caudal.'],
['fluidos','Según Poiseuille, si el radio se duplica y lo demás permanece constante, el flujo:',['se duplica','se cuadruplica','aumenta 8 veces','aumenta 16 veces'],3,'Q es proporcional a r⁴; 2⁴=16.'],
['fluidos','En Poiseuille, si aumenta la viscosidad η y todo lo demás permanece constante, el flujo:',['aumenta','disminuye','no cambia','se hace infinito'],1,'Q es inversamente proporcional a η.'],
['fluidos','La resistencia vascular periférica puede expresarse como:',['RVP=Q/ΔP','RVP=ΔP/Q','RVP=P/A','RVP=ηr'],1,'RVP=ΔP/Q.'],
['fluidos','Si el área de un vaso disminuye, manteniendo el caudal, la velocidad del fluido:',['disminuye','aumenta','queda igual siempre','se hace cero'],1,'A·v constante: menor área implica mayor velocidad.'],
['fluidos','¿Qué régimen de flujo es ordenado y en capas paralelas?',['Turbulento','Laminar','Intermitente','Compresible'],1,'El flujo laminar es ordenado.'],
['fluidos','El número de Reynolds compara principalmente:',['masa y peso','efectos inerciales y viscosos','temperatura y calor','voltaje y resistencia'],1,'Re ayuda a predecir el régimen del flujo.'],
['fluidos','La viscosidad cinemática se relaciona con viscosidad dinámica y densidad mediante:',['ν=ηρ','ν=η/ρ','ν=ρ/η','ν=η+ρ'],1,'ν=η/ρ.'],
['gases','La ley de Boyle se aplica a temperatura constante y usa:',['P₁V₁=P₂V₂','V₁/T₁=V₂/T₂','P₁/T₁=P₂/T₂','p=CkH'],0,'Boyle relaciona presión y volumen a temperatura constante.'],
['gases','En la ley de Charles, la presión se mantiene constante y:',['P/T es constante','V/T es constante','PV es constante','V/P es constante'],1,'V₁/T₁=V₂/T₂.'],
['gases','En la ley de Gay-Lussac, el volumen es constante y:',['V/T es constante','P/T es constante','PV es constante','P/V es constante'],1,'P₁/T₁=P₂/T₂.'],
['gases','En las leyes de gases, la temperatura debe expresarse en:',['°C','°F','K','mL'],2,'Las relaciones proporcionales requieren temperatura absoluta en Kelvin.'],
['gases','La ley de Henry relaciona la presión parcial de un gas disuelto con:',['pᵢ=CᵢkH','P=F/A','Q=V/t','V=RI'],0,'La clase presenta pᵢ=Cᵢ·kH.'],
['gases','Si un gas pasa de 2 L a 4 L a temperatura constante, su presión final será:',['el doble','la mitad','igual','cuatro veces mayor'],1,'P₁V₁=P₂V₂; al duplicar V, P se reduce a la mitad.'],
['gases','La ventilación minuto puede estimarse como:',['VC×frecuencia respiratoria','masa×g','P/A','V/T'],0,'V̇E=VC×f.'],
['gases','Con VC=500 mL y 12 respiraciones/min, la ventilación minuto es:',['0,6 L/min','6 L/min','12 L/min','60 L/min'],1,'500×12=6000 mL/min=6 L/min.'],
['gases','La capacidad vital se obtiene sumando:',['VC+VRI+VRE','VC+VR','VRI+VR','VRE+VR'],0,'CV=VC+VRI+VRE.'],
['gases','El volumen residual es el aire que:',['sale en una espiración normal','queda tras una espiración forzada','entra en cada inspiración normal','se intercambia por minuto'],1,'El VR permanece en los pulmones tras la espiración forzada.'],
['termo','¿Cuál es la equivalencia aproximada usada en clase?',['1 cal=0,418 J','1 cal=4,18 J','1 cal=41,8 J','1 cal=418 J'],1,'La clase usa 1 cal=4,18 J.'],
['termo','En un proceso isocórico, el trabajo de expansión es:',['W=PΔV','W=0','W=PV','W=Q'],1,'Como ΔV=0, no hay trabajo de expansión.'],
['termo','En un proceso adiabático, el calor intercambiado es:',['Q=0','Q=PV','Q=mcΔT siempre','Q=∞'],0,'Adiabático significa sin transferencia de calor: Q=0.'],
['termo','Con la convención W como trabajo realizado por el sistema, la primera ley es:',['ΔU=Q+W','ΔU=Q−W','ΔU=W−Q','ΔU=QW'],1,'La convención usada en la guía es ΔU=Q−W.'],
['termo','En un proceso isotérmico ideal, la variación de energía interna es:',['positiva siempre','negativa siempre','cero','igual a la presión'],2,'Para un gas ideal, U depende de T; si T no cambia, ΔU=0.'],
['termo','¿Cuál mecanismo de pérdida de calor implica cambio de líquido a vapor?',['Conducción','Convección','Evaporación','Radiación'],2,'La evaporación del sudor disipa energía.'],
['termo','Si se evaporan 500 g de agua y cada gramo disipa 2,4 kJ, se pierden aproximadamente:',['120 kJ','500 kJ','1200 kJ','2400 kJ'],2,'500×2,4=1200 kJ.'],
['termo','La conducción es transferencia de calor principalmente por:',['contacto directo','ondas electromagnéticas','cambio de fase','flujo sanguíneo solamente'],0,'La conducción ocurre por contacto y transferencia microscópica de energía.'],
['termo','¿Qué ecuación de metabolismo basal aparece para hombres de 10–18 años según FAO?',['7,4·peso+428·altura+572','16,6·peso+77·altura+572','664,73+13,751·peso','655,1+9,463·peso'],1,'La ecuación FAO para hombres es 16,6·peso(kg)+77·altura(m)+572.'],
['ondas','La relación entre período y frecuencia es:',['T=f','T=1/f','T=2πf','T=f²'],1,'T es el inverso de la frecuencia.'],
['ondas','La frecuencia angular se calcula como:',['ω=f/2π','ω=2πf','ω=A/f','ω=vf'],1,'ω=2πf.'],
['ondas','En MAS, la posición puede escribirse como:',['x=A+t','x=A cos(ωt+φ₀)','x=F/m','x=λ/f'],1,'Es la ecuación de posición del MAS.'],
['ondas','La velocidad máxima en MAS es:',['vmax=Aω','vmax=A/ω','vmax=ω/A','vmax=Af²'],0,'La máxima velocidad ocurre al pasar por el equilibrio: vmax=Aω.'],
['ondas','La longitud de onda se calcula con:',['λ=vf','λ=v/f','λ=f/v','λ=v+f'],1,'λ=v/f.'],
['ondas','Si una onda pasa de 2 MHz a 4 MHz a velocidad constante, su longitud de onda:',['se duplica','se reduce a la mitad','no cambia','se cuadruplica'],1,'λ=v/f: al duplicar f, λ se reduce a la mitad.'],
['ondas','Según la sesión de ultrasonido, una frecuencia mayor tiende a dar:',['menor resolución y mayor penetración','mayor resolución y menor penetración','mayor penetración y menor frecuencia','ningún cambio'],1,'La clase destaca mayor detalle pero menor penetración.'],
['electricidad','La corriente eléctrica se define como:',['I=q/t','I=V/R²','I=Rt','I=qR'],0,'I=q/t.'],
['electricidad','La ley de Ohm es:',['V=RI','V=R/I','V=I/R','V=R+I'],0,'V=R·I.'],
['electricidad','La ley de Joule presentada en clase es:',['E=RI²t','E=RIt²','E=V/R','E=q/t'],0,'E=R·I²·t.'],
['electricidad','La ley de Coulomb es:',['F=kq₁q₂/d²','F=q/t','F=ma','F=V/I'],0,'Describe la fuerza electrostática entre dos cargas.'],
['electricidad','El campo eléctrico se expresa como:',['E=F/q','E=q/F','E=RI','E=Wq'],0,'Campo eléctrico es fuerza por unidad de carga.'],
['bioelectricidad','En la ecuación simplificada de Nernst a 37 °C, el factor aproximado es:',['6,1 mV','61 mV','610 mV','0,61 mV'],1,'La clase usa aproximadamente 61 mV, con el signo y la valencia según el ion.'],
['bioelectricidad','La ecuación de Nernst permite estimar principalmente:',['el flujo cardíaco','el potencial de equilibrio de un ion','la viscosidad','la energía cinética'],1,'Nernst calcula el potencial de equilibrio de un ion.'],
['bioelectricidad','La ecuación GHK se diferencia de Nernst porque:',['ignora las concentraciones','considera varios iones y sus permeabilidades','solo sirve para gases','solo calcula trabajo'],1,'GHK extiende el análisis incorporando permeabilidades de varios iones.'],
['bioelectricidad','Si un impulso recorre 1 m a 100 m/s, el tiempo es:',['0,001 s','0,01 s','0,1 s','100 s'],1,'t=d/v=1/100=0,01 s.'],
['bioelectricidad','Si un impulso recorre 1 m a 1 m/s, el tiempo es:',['0,1 s','1 s','10 s','100 s'],1,'t=1/1=1 s.'],
['bioelectricidad','El potencial de reposo neuronal indicado en la clase es aproximadamente:',['+70 mV','−70 mV','0 mV','+140 mV'],1,'El material usa aproximadamente −70 mV.'],
['bioelectricidad','La despolarización implica, en términos generales:',['interior más negativo','interior menos negativo/más positivo','ausencia de iones','aumento de masa'],1,'La entrada neta de cargas positivas hace el potencial más positivo.'],
['bioelectricidad','La mielinización del axón permite:',['disminuir la velocidad','aumentar la velocidad de conducción','eliminar el potencial de acción','impedir toda corriente'],1,'La mielina favorece una conducción mucho más rápida.']
];

let currentFilter='all', quizSet=[], examMode=false, timerId=null, remaining=600;
const $=s=>document.querySelector(s);
const topicsEl=$('#topics'), formulaEl=$('#formulaGrid'), practiceEl=$('#practiceGrid');

function renderTopics(){
 const q=($('#search').value||'').toLowerCase();
 topicsEl.innerHTML=topics.filter(t=>(currentFilter==='all'||t.cat===currentFilter)&&(`${t.title} ${t.desc} ${t.points.join(' ')}`).toLowerCase().includes(q)).map(t=>`<article class="topic card"><div class="topic-top"><span class="badge">${t.tag}</span><span class="badge">${t.cat}</span></div><h3>${t.title}</h3><p>${t.desc}</p><ul>${t.points.map(x=>`<li>${x}</li>`).join('')}</ul><button class="btn primary small explain" data-id="${t.id}">💡 Explícame esto</button></article>`).join('')||'<div class="card topic"><h3>No encontré ese tema</h3><p>Prueba con otra palabra.</p></div>';
 document.querySelectorAll('.explain').forEach(b=>b.onclick=()=>openExplain(+b.dataset.id));
}
function renderFormulas(){formulaEl.innerHTML=formulas.map(([name,...lines])=>`<div class="formula-group"><h3>${name}</h3>${lines.map((x,i)=>`<div class="formula-line">${x}</div>`).join('')}</div>`).join('')}
function renderPractice(){practiceEl.innerHTML=practices.map((p,i)=>`<div class="practice-item"><strong>${p[0]}</strong><div>${p[1]}</div><div class="practice-answer" id="ans${i}" hidden>✓ ${p[2]}</div><button class="btn ghost small reveal" data-i="${i}">Mostrar resultado</button></div>`).join('');document.querySelectorAll('.reveal').forEach(b=>b.onclick=()=>{const e=$('#ans'+b.dataset.i);e.hidden=false;b.remove()})}
function openExplain(id){const t=topics.find(x=>x.id===id);$('#modalContent').innerHTML=`<span class="eyebrow dark">${t.tag}</span><h2>${t.title}</h2><p>${t.explain}</p><h3>Qué debes recordar</h3><ul class="explain-list">${t.points.map(x=>`<li>${x}</li>`).join('')}</ul>`;$('#modal').classList.remove('hidden');$('#modal').setAttribute('aria-hidden','false')}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function newQuiz(){clearInterval(timerId);remaining=600;quizSet=shuffle(questions).slice(0,10).map(q=>{const opts=shuffle(q[2].map((text,i)=>({text,i})));return {...q,opts,correct:opts.findIndex(o=>o.i===q[3])}});renderQuiz();if(examMode)startTimer();else $('#timer').textContent='10:00'}
function renderQuiz(){ $('#quizStatus').textContent='10 preguntas seleccionadas al azar'; $('#progressBar').style.width='0%'; $('#quizBody').innerHTML=quizSet.map((q,i)=>`<div class="question" data-q="${i}"><h3>${i+1}. ${q[1]}</h3><div class="options">${q.opts.map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"><span>${String.fromCharCode(65+j)}. ${o.text}</span></label>`).join('')}</div><div class="explanation" id="exp${i}"></div></div>`).join('');document.querySelectorAll('input[type=radio]').forEach(x=>x.onchange=updateProgress)}
function updateProgress(){const answered=new Set([...document.querySelectorAll('input[type=radio]:checked')].map(x=>x.name));$('#progressBar').style.width=(answered.size/10*100)+'%'}
function grade(){let score=0;quizSet.forEach((q,i)=>{const card=document.querySelector(`[data-q="${i}"]`), sel=card.querySelector('input:checked'), exp=$('#exp'+i);card.classList.remove('correct','wrong');if(sel&&+sel.value===q.correct){score++;card.classList.add('correct');exp.innerHTML='✓ Correcto. '+q[4]}else{card.classList.add('wrong');exp.innerHTML='✗ Correcta: '+String.fromCharCode(65+q.correct)+'. '+q.opts[q.correct].text+'. '+q[4]}});$('#quizStatus').textContent=`Resultado: ${score}/10 (${score*10}%)`;$('#scoreStat').textContent=score+'/10';const a=+(localStorage.getItem('fisicaAttempts')||0)+1;localStorage.setItem('fisicaAttempts',a);$('#attemptStat').textContent=a;clearInterval(timerId);window.scrollTo({top:document.querySelector('#quiz').offsetTop-20,behavior:'smooth'})}
function startTimer(){remaining=600;$('#timer').textContent='10:00';timerId=setInterval(()=>{remaining--;const m=String(Math.floor(remaining/60)).padStart(2,'0'),s=String(remaining%60).padStart(2,'0');$('#timer').textContent=`${m}:${s}`;if(remaining<=0){clearInterval(timerId);grade()}},1000)}
function toggleExam(){examMode=!examMode;$('#examBtn').textContent=examMode?'⏱️ Examen activo':'⏱️ Modo examen';if(examMode){alert('Modo examen activado: 10 preguntas y 10 minutos.');startTimer()}else{clearInterval(timerId);$('#timer').textContent='10:00'}}

$('#search').addEventListener('input',renderTopics);document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentFilter=b.dataset.filter;renderTopics()});$('#newQuiz').onclick=newQuiz;$('#submitQuiz').onclick=grade;$('#examBtn').onclick=toggleExam;$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('fisicaDark',document.body.classList.contains('dark'));$('#themeBtn').textContent=document.body.classList.contains('dark')?'☀️ Modo claro':'🌙 Modo oscuro'};$('#closeModal').onclick=()=>$('#modal').classList.add('hidden');$('#modal').onclick=e=>{if(e.target.id==='modal')$('#modal').classList.add('hidden')};

$('#topicCount').textContent=topics.length;$('#questionCount').textContent=questions.length;$('#attemptStat').textContent=localStorage.getItem('fisicaAttempts')||0;if(localStorage.getItem('fisicaDark')==='true'){document.body.classList.add('dark');$('#themeBtn').textContent='☀️ Modo claro'}renderTopics();renderFormulas();renderPractice();newQuiz();
