// Definición de los horarios por grupo
const horarios = {
	'10-1-B': {
		'Lunes': ['Ética AE', 'Español AV2', 'Español AV2', 'Física AV5', 'Física AV5', 'Física AV5', 'Educación Física GIM', 'Educación Física GIM', 'Español AV2', 'PpW LAB1N', 'PpW LAB1N', 'PpW LAB1N'],
		'Martes': ['Física AV5', 'Física AV5', 'Física AV5', 'PpW LAB1N', 'PpW LAB1N', 'PpW LAB1N', 'PpW LAB1N', 'PpW LAB1N', 'PpW LAB1N', 'ST LAB3V', 'ST LAB3V', 'ST LAB3V'],
		'Miércoles': ['PpW LAB1N', 'PpW LAB1N', 'PpW LAB1N', 'DS  LAB1N', 'DS LAB1N', 'DS LAB1N', 'EOTWD LAB4V', 'EOTWD LAB4V', 'EOTWD LAB4V', 'DS LAB1N', 'DS LAB1N', 'DS LAB1N'],
		'Jueves': ['Estudios Sociales - AV4', 'Estudios Sociales - AV4', 'Música - Lab2N', 'ST - Lab2N', 'ST - Lab2N', 'ST - Lab2N', 'Guía', 'Cívica - AV5', 'Matemática - AV1', 'Matemática - AV1', 'Inglés Academico - AV6', 'Inglés Academico - AV6'],
		'Viernes': ['TICs - Lab2N', 'TICs - Lab2N', 'TICs - Lab2N', 'TICs - Lab2N', 'TICs - Lab2N', 'TICs - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'Inglés Academico - AV1', 'Inglés Academico - AV1', 'Matemática - AV1']
		
	},
	'10-1-A': {
		'Lunes': ['Ética - AE', 'Español - AV2', 'Español - AV2', 'Física - AV5', 'Física - AV5', 'Física - AV5', 'Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Español - AV2', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N'],
		'Martes': ['Física - AV5', 'Física - AV5', 'Física - AV5', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N'],
		'Miércoles': ['DP - AN5', 'DP - AN5', 'DP - AN5', 'DP - AN5', 'DP - AN5', 'DP - AN5', 'EOtA', 'EOtA', 'EOtA', 'DT - AV5', 'DT - AV5', 'DT - AV5'],
		'Jueves': ['Estudios Sociales - AV4', 'Estudios Sociales - AV4', 'Música - Lab4N', 'DP - AV2', 'DP - AV2', 'DP - AV2', 'Guía', 'Cívica - AV5', 'Matemática - AV1', 'Matemática - AV1', 'Inglés Academico - AV6', 'Inglés Academico - AV6'],
		'Viernes': ['Foto - Lab4N', 'Foto - Lab4N', 'Foto - Lab4N', 'Foto - Lab4N', 'Foto - Lab4N', 'FOTO - Lab4N', 'DP - AV6', 'DP - AV6', 'DP - AV6', 'Inglés Academico - AV1', 'Inglés Academico - AV1', 'Matemática - AV1'],
	},
	'10-2-A': {
			'Lunes': ['Física - AV5', 'Física - AV5', 'Física - AV5', 'Ética - AE', 'Español - AV2', 'Inglés academico - Lab5V', 'EOtA - Lab5V', 'EOtA - Lab5V', 'EOtA - Lab5V', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4'],
			'Martes': ['GC - AN4', 'GC - AN4', 'GC - AN4', 'Física - AV5', 'Física - AV5', 'Física - AV5', 'EOtA - Lab5V', 'EOtA - Lab5V', 'EOtA - Lab5V', 'Español - AV2', 'Español - AV2', 'Cívica - AV5'],
			'Miércoles': ['Inglés Academico - AE', 'Inglés Academico - AE', 'Inglés Academico - AE', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4'],
			'Jueves': ['GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4', 'Estudios Sociales - AE', 'Estudios Sociales - AE', 'Música - AE', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4'],
			'Viernes': ['GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'Matemáticas - AV1', 'Matemáticas - AV1', 'Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Matemáticas - AV1', 'Guía - AV6'],
	},
	'10-2-B': {
		'Lunes': ['Física - AV5', 'Física - AV5', 'Física - AV5', 'Ética - AE', 'Español - AV2', 'Inglés academico - AV5', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6'],
		'Martes': ['Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Física - AV5', 'Física - AV5', 'Física - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'Español - AV2', 'Español - AV2', 'Cívica - AV5'],
		'Miércoles': ['Inglés Academico - AE', 'Inglés Academico - AE', 'Inglés Academico - AE', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V'],
		'Jueves': ['Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6', 'Estudios Sociales - AE', 'Estudios Sociales - AE', 'Música - AE', 'Logistica - Lab2V', 'Logistica - Lab2V', 'Logistica - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V'],
		'Viernes': ['EOTWD - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Matemáticas - AV1', 'Matemáticas - AV1', 'Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Matemáticas - AV1', 'Guía - AV6'],
	},
		'10-3-A': {
			'Lunes': ['FP - Lab1N', 'FP - Lab1N', 'FP - Lab1N', 'AySaC - Lab2N', 'AySaC - Lab2N', 'AySaC - Lab2N', 'Tdll - Lab3V', 'Tdll - Lab3V', 'Tdll - Lab3V', 'Matemática - AV1', 'Matemática - AV1', 'Guía - AV6'],
			'Martes' ['Lab2N AySaC', 'Lab2N AySaC', 'Lab2N AySaC', 'Español - AV2', 'Ética - AE', 'Matemática - AV1', 'Inglés Acad - AV6', 'Inglés Acad - AV6', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Física - AV6', 'Física - AV6']
			'Miércoles': ['Música - AV3', 'Español - AV2', 'Español - AV2', 'Inglés Técnico - LAB4V', 'Inglés Técnico - LAB4V', 'Inglés Técnico - LAB4V', 'FP - Lab1N', 'FP - Lab1N', 'FP - Lab1N', 'Inglés Academico - AV6', 'Inglés Academico - AV6', 'Física - AV4'],
			'Jueves': ['FP - Lab1N', 'FP - Lab1N', 'FP - Lab1N', 'Física - AE', 'Física - AE', 'Cívica - AV4', 'FP - Lab1N', 'FP - Lab1N', 'FP - Lab1N', 'AySaC - Lab2N', 'AySaC - Lab2N', 'AySaC - Lab2N'],
			'Viernes': ['Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Física - AV5', 'Inglés técnico - LAB4V', 'Inglés técnico - LAB4V', 'Inglés técnico LAB4V', 'Tdll - LAB2N', 'Tdll - LAB2N', 'Tdll - LAB2N', 'AySaC - Lab2N', 'AySaC - Lab2N', 'AySaC - Lab2N']
	},
	
	'10-3-B' : {
		'Lunes': ['EOtBaCSE - Lab6V', 'EOtBaCSE - Lab6V', 'EOtBaCSE - Lab6V', 'GCyCpeSaC - Lab3N', 'GCyCpeSaC - Lab3N', 'GCyCpeSaC - Lab3N', 'DDpGlIyeCE - Lab3N', 'DDpGlIyeCE - Lab3N', 'DDpGlIyeCE - Lab3N', 'Matemática - AV1', 'Matemática - AV1', 'Guía - AV6'],
		'Martes': ['GCyCpeSaC - AN1', 'GCyCpeSaC - AN1', 'GCyCpeSaC - AN1', 'Español - AV2', 'Ética - AE', 'Matematicas - AV1', 'Inglés Academico - AV6', 'Inglés Academico - AV6', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Física - AV6', 'Física - AV6'],
		'Miércoles': ['Música - AV3', 'Español - AV2', 'Español - AV2', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'Inglés - AV6', 'Inglés - AV6', 'Física - AV6'],
		'Jueves': ['EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'Física - AE', 'Física - AE', 'Cívica - AV4', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V'],
		'Viernes': ['Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Física - AV5', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'DDpGlIyeCE - Lab3N', 'DDpGlIyeCE - Lab3N', 'DDpGlIyeCE - Lab3N']
	},
	'10-4-A': {
		'Lunes': ['GeTDC', 'GeTDC', 'GeTDC', 'GeTDC', 'GeTDC', 'GeTDC', 'GeTDC', 'GeTDC', 'GeTDC', 'Cívica', 'Español', 'Matemática'],
		'Martes': ['Física', 'Física', 'ética', 'GC', 'GC', 'GC', 'GC', 'GC', 'GC', 'GC', 'GC', 'GC'],
		'Miércoles': ['GC', 'GC', 'GC', 'Música', 'Estudios Sociales', 'Estudios Sociales', 'Inglés academico', 'Matemáticas', 'Matemáticas', 'Física', 'Física', 'Inglés academico'],
		'Jueves': ['EOtA', 'EOtA', 'EOtA', 'GeTDC', 'GeTDC', 'GeTDC', 'Física', 'Inglés Academico', 'Inglés Academico', 'EOtA', 'EOtA', 'EOtA'],
		'Viernes': ['Español', 'Español', 'Educación Física', 'Educación Física', 'Física', 'Guía', 'GC', 'GC', 'GC', 'GC', 'GC', 'GC'],
	},
	'10-4-B': {
		'Lunes': ['GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'Cívica', 'Español', 'Matemáticas'],
		'Martes': ['Física', 'Física', 'Ética', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'DDpGlIyeCE', 'DDpGlIyeCE', 'DDpGlIyeCE', 'DDpGlIyeCE', 'DDpGlIyeCE', 'DDpGlIyeCE'],
		'Miércoles': ['DDpGlIyeCE', 'DDpGlIyeCE', 'DDpGlIyeCE', 'Música', 'Estudios Sociales', 'Estudios Sociales', 'Inglés Academico', 'Matemáticas', 'Matemáticas', 'Física', 'Física', 'Inglés Academico'],
		'Jueves': ['GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC', 'Física', 'Inglés Academico', 'Inglés Academico', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE'],
		'Viernes': ['Español', 'Español', 'Educación Física', 'Educación Física', 'Física', 'Guía', 'DDpGlIyeCE', 'DDpGlIyeCE', 'DDpGlIyeCE', 'GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC'],
	},
	'10-5-A': {
		'Lunes': ['Fundamentos Electro', 'Fundamentos Electro', 'Fundamentos Electro', 'Inglés Academico', 'Ética', 'Español', 'Guía', 'Cívica', 'Educación Física', 'Educación Física', 'Estudios Sociales', 'Estudios Sociales'],
		'Martes': ['IE', 'IE', 'IE', 'EOtIE', 'EOtIE', 'EOtIE', 'Fundamentos Electro', 'Fundamentos Electro', 'Fundamentos Electro', 'Fundamentos Electro', 'Fundamentos Electro', 'Fundamentos Electro'],
		'Miércoles': ['Fundamentos Electro', 'Fundamentos Electro', 'Fundamentos Electro', 'EOtIE', 'EOtIE', 'EOtIE', 'Física', 'Español', 'Español', 'IE', 'IE', 'IE'],
		'Jueves': ['TdIAalEI', 'TdIAalEI', 'TdIAalEI', 'TdIAalEI', 'TdIAalEI', 'TdIAalEI', 'Matemáticas', 'Matemáticas', 'Música', 'Física', 'Física', 'Física'],
		'Viernes': ['Física', 'Física', 'Matemáticas', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico', 'IE', 'IE', 'IE', 'IE', 'IE', 'IE'],
	},
	'10-5-B': {
		'Lunes': ['CEySaCI', 'CEySaCI', 'CEySaCI', 'Inglés Academico', 'Ética', 'Español', 'Guía', 'Cívica', 'Educación Física', 'Educación Física', 'Estudios Sociales', 'Estudios Sociales'],
		'Martes': ['DDpePyAdIF', 'DDpePyAdIF', 'DDpePyAdIF', 'DDpePyAdIF', 'DDpePyAdIF', 'DDpePyAdIF', 'GCC', 'GCC', 'GCC', 'EOtS', 'EOtS', 'EOtS'],
		'Miércoles': ['CEySaCI', 'CEySaCI', 'CEySaCI', 'CEySaCI', 'CEySaCI', 'CEySaCI', 'Física', 'Español', 'Español', 'CEySaCI', 'CEySaCI', 'CEySaCI'],
		'Jueves': ['GCC', 'GCC', 'GCC', 'EOtS', 'EOtS', 'EOtS', 'Matemáticas', 'Matemáticas', 'Música', 'Física', 'Física', 'Física'],
		'Viernes': ['Física', 'Física', 'Matemáticas', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico', 'DDpePyAdIF', 'DDpePyAdIF', 'DDpePyAdIF', 'DDpePyAdIF', 'DDpePyAdIF', 'DDpePyAdIF'],
	},
	'11-1-A': {
		'Lunes': ['Educación Física', 'Educación Física', 'Química', 'Química', 'Química', 'Ética', 'DD', 'DD', 'DD', 'Inglés academico', 'Inglés academico', 'Inglés academico'],
		'Martes': ['DD', 'DD', 'DD', 'Cívica', 'Español', 'Español', 'Matemáticas', 'Matemáticas', 'Matemáticas', 'Estudios Sociales', 'Estudios Sociales', 'Español'],
		'Miércoles': ['DP', 'DP', 'DP', 'DP', 'DP', 'DP', 'DT', 'DT', 'DT', 'DD', 'DD', 'DD'],       
		'Jueves': ['Biología', 'Biología', 'Biología', 'Afectividad', 'Música', 'Guía', 'Foto', 'Foto', 'Foto', 'Foto', 'Foto', 'Foto'],
		'Viernes': ['IT', 'IT', 'IT', 'DD', 'DD', 'DD', 'DP', 'DP', 'DP', 'DP', 'DP', 'DP'],
	},
	'11-1-B': {
		'Lunes': ['Educación Física', 'Educación Física', 'Química', 'Química', 'Química', 'Ética', 'EOtA', 'EOtA', 'EOtA', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico'],
		'Martes': ['EOtA', 'EOtA', 'EOtA', 'Cívica', 'Español', 'Español', 'Matemáticas', 'Matemáticas', 'Matemáticas', 'Estudios Sociales', 'Estudios Sociales', 'Español'],
		'Miércoles': ['GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC'],
		'Jueves': ['Biologia', 'Afectividad', 'Música', 'Guía', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT'],
		'Viernes': ['GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT'],
	},
	'11-2-A': {
		'Lunes': ['Química', 'Guía', 'Ética', 'Electr. Analog', 'Electr. Analog', 'Electr. Analog', 'Electr. Analog', 'Electr. Analog', 'Electr. Analog', 'AI', 'AI', 'AI'],
		'Martes': ['EOtlE', 'EOtlE', 'EOtlE', 'AI', 'AI', 'AI', 'Estudios Sociales', 'Estudios Sociales', 'Español', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico'],
		'Miércoles': ['Biología', 'Biología', 'Biología', 'Música', 'AI', 'AI', 'AI', 'AI', 'AI', 'EOtlE', 'EOtlE', 'EOtlE'],
		'Jueves': ['Español', 'Español', 'Cívica', 'Matemáticas', 'Matemáticas', 'Matemáticas', 'Elec. Dig', 'Elec. Dig', 'Elec. Dig', 'Elec. Dig', 'Elec. Dig', 'Elec. Dig'],
		'Viernes': ['Eel', 'Eel', 'Eel', 'Eel', 'Eel', 'Eel', 'Biología', 'Afectividad', 'Química', 'Química', 'Educación Física', 'Educación Física'],
	},
	'11-2-B': {
		'Lunes': ['Química', 'Guía', 'Ética', 'EOtS', 'EOtS', 'EOtS', 'CEySaCI', 'CEySaCI', 'CEySaCI', 'EelaaSE', 'EelaaSE', 'EelaaSE'],
		'Martes': ['DDpePyAdlF', 'DDpePyAdlF', 'DDpePyAdlF', 'DDpePyAdlF', 'DDpePyAdlF', 'DDpePyAdlF', 'Estudios Sociales', 'Estudios Sociales', 'Español', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico'],
		'Miércoles': ['Biología', 'Biología', 'Música', 'CEySaCI', 'CEySaCI', 'CEySaCI', 'EOtS', 'EOtS', 'EOtS', 'EelaaSE', 'EelaaSE', 'EelaaSE'],
		'Jueves': ['Español', 'Español', 'Cívica', 'Matemáticas', 'Matemáticas', 'Matemáticas', 'CEySaCI', 'CEySaCI', 'CEySaCI', 'CEySaCI', 'CEySaCI', 'CEySaCI'],
		'Viernes': ['DDpePyAdlF', 'DDpePyAdlF', 'DDpePyAdlF', 'DDpePyAdlF', 'DDpePyAdlF', 'DDpePyAdlF', 'Biología', 'Afectividad', 'Química', 'Química', 'Educación Física', 'Educación Física'],
	},
	'11-3-A': {
		'Lunes': ['Guía', 'Ética', 'Educación Física', 'Educación Física', 'Inglés Academico', 'Química', 'AySaC', 'AySaC', 'AySaC', 'EotNCaS', 'EotNCaS', 'EotNCaS'],
		'Martes': ['EelC', 'EelC', 'EelC', 'EelC', 'EelC', 'EelC', 'Español', 'Español', 'Cívica', 'EotNCaS', 'EotNCaS', 'EotNCaS'],
		'Miércoles': ['Español', 'Estudios Sociales', 'Estudios Sociales', 'CySaR', 'CySaR', 'CySaR', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC'],       
		'Jueves': ['Matemáticas', 'Matemáticas', 'Matemáticas', 'Biología', 'Biología', 'Biología', 'Música', 'Inglés Academico', 'Inglés Academico', 'CySaR', 'CySaR', 'CySaR'],
		'Viernes': ['CySaR', 'CySaR', 'CySaR', 'CySaR', 'CySaR', 'CySaR', 'AySaC', 'AySaC', 'AySaC', 'Afectivad', 'Química', 'Química'],
	},
	'11-3-B': {
		'Lunes': ['Guía', 'Ética', 'Educación Física', 'Educación Física', 'Inglés Academico', 'Química', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT'],
		'Martes': ['GT', 'GT', 'GT', 'EOtA', 'EOtA', 'EOtA', 'Español', 'Español', 'Cívica', 'GT', 'GT', 'GT'],
		'Miércoles': ['Español', 'Estudios Sociales', 'Estudios Sociales', 'EOtA', 'EOtA', 'EOtA', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC'],
		'Jueves': ['Matemáticas', 'Matemáticas', 'Matemáticas', 'Biología', 'Biología', 'Biología', 'Música', 'Inglés Academico', 'Inglés Academico', 'GT', 'GT', 'GT'],
		'Viernes': ['GT', 'GT', 'GT', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'Afectividad', 'Química', 'Química'],
	},
	'11-4-A': {
		'Lunes': ['EelC', 'EelC', 'EelC', 'EelC', 'EelC', 'EelC', 'EotNCaS', 'EotNCaS', 'EotNCaS', 'AySaC', 'AySaC', 'AySaC'],
		'Martes': ['EotNCaS', 'EotNCaS', 'EotNCaS', 'Ética', 'Cívica', 'Guía', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC'],
		'Miércoles': ['CySaR', 'CySaR', 'CySaR', 'Matemáticas', 'Matemáticas', 'Biología', 'Música', 'Biología', 'Biología', 'Matemáticas', 'Estudios Sociales', 'Estudios Sociales'],
		'Jueves': ['CySaR', 'CySaR', 'CySaR', 'AySaC', 'AySaC', 'AySaC', 'CySaR', 'CySaR', 'CySaR', 'Español', 'Español', 'Español'],
		'Viernes': ['Química', 'Química', 'Química', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico', 'Educación Física', 'Educación Física', 'Afectividad', 'CySaR', 'CySaR', 'CySaR'],
	},
	'11-4-B': {
		'Lunes': ['Logistica', 'Logistica', 'Logistica', 'Logistica', 'Logistica', 'Logistica', 'Ope. manu', 'Ope. manu', 'Ope. manu', 'Admin. Inv', 'Admin. Inv', 'Admin. Inv'],
		'Martes': ['Admin. Inv', 'Admin. Inv', 'Admin. Inv', 'Ética', 'Cívica', 'Guía', 'Logistica', 'Logistica', 'Logistica', 'Admin. Inv', 'Admin. Inv', 'Admin. Inv'],
		'Miércoles': ['Admin. Inv', 'Admin. Inv', 'Admin. Inv', 'Matemáticas', 'Matemáticas', 'Biología', 'Música', 'Biología', 'Biología', 'Matemáticas', 'Estudios Sociales', 'Estudios Sociales'],
		'Jueves': ['Ope. manu', 'Ope. manu', 'Ope. manu', 'Logistica', 'Logistica', 'Logistica', 'EFCA', 'EFCA', 'EFCA', 'Español', 'Español', 'Español'],
		'Viernes': ['Química', 'Química', 'Química', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico', 'Educación Física', 'Educación Física', 'Afectividad', 'EFCA', 'EFCA', 'EFCA'],
	},
	'11-5-A': {
		'Lunes': ['GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'Química', 'Química', 'Química', 'Guía', 'Educación Física', 'Educación Física'],
		'Martes': ['Ética', 'Inglés Academico', 'Inglés Academico', 'GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'Biología', 'Matemáticas', 'Matemáticas'],
		'Miércoles': ['GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'GEpC', 'Estudios Sociales', 'Estudios Sociales', 'Música', 'Inglés Academico', 'Biología', 'Biología'],
		'Jueves': ['GT', 'GT', 'GT', 'GT', 'GT', 'GT', 'GEpC', 'GEpC', 'GEpC', 'Cívica', 'Afectividad', 'Matemáticas'],
		'Viernes': ['EOtA', 'EOtA', 'EOtA', 'Español', 'Español', 'Español', 'EOtA', 'EOtA', 'EOtA', 'GEpC', 'GEpC', 'GEpC'],
	},
	'11-5-B': {
		'Lunes': ['Logistica', 'Logistica', 'Logistica', 'Logistica', 'Logistica', 'Logistica', 'Química', 'Química', 'Química', 'Guía', 'Educación Física', 'Educación Física'],
		'Martes': ['Ética', 'Inglés Academico', 'Inglés Academico', 'Admin. Inv', 'Admin. Inv', 'Admin. Inv', 'Logistica', 'Logistica', 'Logistica', 'Biología', 'Matemáticas', 'Matemáticas'],
		'Miércoles': ['EFCA', 'EFCA', 'EFCA', 'Logistica', 'Logistica', 'Logistica', 'Estudios Sociales', 'Estudios Sociales', 'Música', 'Inglés Academico', 'Biología', 'Biología'],
		'Jueves': ['EFCA', 'EFCA', 'EFCA', 'Ope. Manu', 'Ope. Manu', 'Ope. Manu', 'Admin. Inv', 'Admin. Inv', 'Admin. Inv', 'Cívica', 'Afectividad', 'Matemáticas'],  
		'Viernes': ['Ope. Manu', 'Ope. Manu', 'Ope. Manu', 'Español', 'Español', 'Español', 'Admin. Inv', 'Admin. Inv', 'Admin. Inv', 'Admin. Inv', 'Admin. Inv', 'Admin. Inv'],
	},
	'12-1-A': {
		'Lunes': ['Matemáticas', 'Matemáticas', 'Matemáticas', 'Estudios Sociales', 'Estudios Sociales', 'Matemáticas', 'Química', 'Química', 'Química', 'EFCA', 'EFCA', 'EFCA'],
		'Martes': ['Estudios Sociales', 'Estudios Sociales', 'Estudios Sociales', 'Import y Export', 'Import y Export', 'Import y Export', 'EFCA', 'EFCA', 'EFCA', 'Import y Export', 'Import y Export', 'Import y Export'],
		'Miércoles': ['Ope. manu', 'Ope. manu', 'Ope. manu', 'Español', 'Español', 'Biología', 'Logistica', 'Logistica', 'Logistica', 'Logistica', 'Logistica', 'Logistica'],
		'Jueves': ['Biología', 'Biología', 'Español', 'Español', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico', 'Psicología', 'Cívica', 'Ope. manu', 'Ope. manu', 'Ope. manu'],
		'Viernes': ['Import y Export', 'Import y Export', 'Import y Export', 'Import y Export', 'Import y Export', 'Import y Export', 'Ope. manu', 'Ope. manu', 'Ope. manu', 'Ope. manu', 'Ope. manu', 'Ope. manu'],        
	},
	'12-1-B': {
		'Lunes': ['Matemáticas', 'Matemáticas', 'Matemáticas', 'Estudios Sociales', 'Estudios Sociales', 'Matemáticas', 'Química', 'Química', 'Química', 'GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC'],
		'Martes': ['Estudios Sociales', 'Estudios Sociales', 'Estudios Sociales', 'GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC', 'DDpGllyeCE', 'DDpGllyeCE', 'DDpGllyeCE', 'DDpGllyeCE', 'DDpGllyeCE', 'DDpGllyeCE'],
		'Miércoles': ['GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC', 'Español', 'Español', 'Biología', 'DDpGllyeCE', 'DDpGllyeCE', 'DDpGllyeCE', 'DDpGllyeCE', 'DDpGllyeCE', 'DDpGllyeCE'],
		'Jueves': ['Biología', 'Biología', 'Español', 'Español', 'Inglés Academico', 'Inglés Academico', 'Inglés Academico', 'Psicología', 'Cívica', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE'],
		'Viernes': ['GCyCpeSaC', 'GCyCpeSaC', 'GCyCpeSaC', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE', 'EOtBaCSE'],
	},
	'12-2-A': {
		'Lunes': ['Química', 'Química', 'Química', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'CySaR', 'CySaR', 'CySaR'],
		'Martes': ['Biología', 'Biología', 'Matemáticas', 'Español', 'Español', 'Estudios Sociales', 'Estudios Sociales', 'Estudios Sociales', 'Biología', 'ST', 'ST', 'ST'],
		'Miércoles': ['Inglés Academico', 'Inglés Academico', 'Estudios Sociales', 'Estudios Sociales', 'Cívica', 'Inglés Academico', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC'],
		'Jueves': ['Matamáticas', 'Matamáticas', 'Matamáticas', 'CySaR', 'CySaR', 'CySaR', 'EotNCaS', 'EotNCaS', 'EotNCaS', 'CySaR', 'CySaR', 'CySaR'],
		'Viernes': ['EotNCaS', 'EotNCaS', 'EotNCaS', 'CySaR', 'CySaR', 'CySaR', 'Psicología', 'Español', 'Español', 'ST', 'ST', 'ST'],
	},
	'12-2-B': {
		'Lunes': ['Química', 'Química', 'Química', 'DDpePydlF', 'DDpePydlF', 'DDpePydlF', 'DDpePydlF', 'DDpePydlF', 'DDpePydlF', 'CEySC', 'CEySC', 'CEySC'],
		'Martes': ['Biología', 'Biología', 'Matemáticas', 'Español', 'Español', 'Estudios Sociales', 'Estudios Sociales', 'Estudios Sociales', 'Biología', 'CEySC', 'CEySC', 'CEySC'],
		'Miércoles': ['Inglés Academico', 'Inglés Academico', 'Estudios Sociales', 'Estudios Sociales', 'Civíca', 'Inglés Academico', 'CEySC', 'CEySC', 'CEySC', 'EOtS', 'EOtS', 'EOtS'],
		'Jueves': ['Matemáticas', 'Matemáticas', 'Matemáticas', 'DDpePydlF', 'DDpePydlF', 'DDpePydlF', 'DDpePydlF', 'DDpePydlF', 'DDpePydlF', 'CEySC', 'CEySC', 'CEySC'],
		'Viernes': ['GCC', 'GCC', 'GCC', 'GCC', 'GCC', 'GCC', 'Psicología', 'Español', 'Español', 'EOtS', 'EOtS', 'EOtS'],
	},
	'12-3-A': {
		'Lunes': ['Estudios Sociales', 'Estudios Sociales', 'Estudios Sociales', 'Química', 'Química', 'Química', 'Matemáticas', 'Matemáticas', 'Matemáticas', 'Inglés Academico', 'Inglés Academico', 'Español'],
		'Martes': ['GeC', 'GeC', 'GeC', 'Estudios Sociales', '', 'Biología', 'GeC', 'GeC', 'GeC', 'Inglés Academico', 'Biología', 'Biología'],
		'Miércoles': ['CF', 'CF', 'CF', 'CF', 'CF', 'CF', 'CF', 'CF', 'CF', 'CF', 'CF', 'CF'],
		'Jueves': ['GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'Español', 'Español', 'Español', 'Psicología', 'Matemáticas', 'Cívica'],
		'Viernes': ['GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'EOtAF', 'EOtAF', 'EOtAF', 'EOtAF', 'EOtAF', 'EOtAF'],
	},
	'12-3-B': {
		'Lunes': ['Estudios Sociales', 'Estudios Sociales', 'Estudios Sociales', 'Química', 'Química', 'Química', 'Matemáticas', 'Matemáticas', 'Matemáticas', 'Inglés Academico', 'Inglés Academico', 'Español'],
		'Martes': ['AySaC', 'AySaC', 'AySaC', 'Estudios Sociales', 'Estudios Sociales', 'Biología', 'AySaC', 'AySaC', 'AySaC', 'Inglés Academico', 'Biología', 'Biología'],
		'Miércoles': ['EotNCaS', 'EotNCaS', 'EotNCaS', 'CySaR', 'CySaR', 'CySaR', 'CySaR', 'CySaR', 'CySaR', 'AySaC', 'AySaC', 'AySaC'],
		'Jueves': ['CySaR', 'CySaR', 'CySaR', 'ST', 'ST', 'ST', 'Español', 'Español', 'Español', 'Psicología', 'Matemáticas', 'Cívica'],
		'Viernes': ['AySaC', 'AySaC', 'AySaC', 'EotNCaS', 'EotNCaS', 'EotNCaS', 'ST', 'ST', 'ST', 'CySaR', 'CySaR', 'CySaR'],
	},
	'12-4': {
		'Lunes': ['EOtA', 'EOtA', 'EOtA', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'Español', 'Química', 'Química'],
		'Martes': ['GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC', 'GeC'],
		'Miércoles': ['Matemáticas', 'Matemáticas', 'Biología', 'Biología', 'Biología', 'Cívica', 'Estudios Sociales', 'Estudios Sociales', 'Estudios Sociales', 'Español', 'Español', 'Español'],
		'Jueves': ['Inglés Academico', 'Inglés Academico', 'Psicología', 'EOtA', 'EOtA', 'EOtA', 'GC', 'GC', 'GC', 'GC', 'GC', 'GC'],
		'Viernes': ['Matemáticas', 'Matemáticas', 'Inglés Academico', 'Química', 'Estudios Sociales', 'Estudios Sociales', 'GC', 'GC', 'GC', 'GC', 'GC', 'GC'],       
	},
	'12-5': {
		'Lunes': ['AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'AySaC', 'CySaR', 'CySaR', 'CySaR', 'Química', 'Química', 'Química'],
		'Martes': ['ST', 'ST', 'ST', 'CySaR', 'CySaR', 'CySaR', 'Biología', 'Biología', 'Español', 'AySaC', 'AySaC', 'AySaC'],
		'Miércoles': ['CySaR', 'CySaR', 'CySaR', 'Inglés Academico', 'Inglés Academico', 'Matemáticas', 'Matemáticas', 'Inglés Academico', 'Cívica', 'Estudios Sociales', 'Estudios Sociales', 'Estudios Sociales'],        
		'Jueves': ['EotNCaS', 'EotNCaS', 'EotNCaS', 'EotNCaS', 'EotNCaS', 'EotNCaS', 'AySaC', 'AySaC', 'AySaC', 'ST', 'ST', 'ST'],
		'Viernes': ['Estudios Sociales', 'Estudios Sociales', 'Psicología', 'Matemáticas', 'Matemáticas', 'Biología', 'CySaR', 'CySaR', 'CySaR', 'Español', 'Español', 'Español'],
	},

};

// Función para cargar el horario del grupo seleccionado
function cargarHorario() {
    const grupoSelect = document.getElementById('grupoSelect');
    const grupoSeleccionado = grupoSelect.value;
    const horarioGrupo = horarios[grupoSeleccionado];

    const tablaBody = document.querySelector('#horarioTable tbody');
    tablaBody.innerHTML = ''; // Limpiar contenido anterior

    // Iterar sobre cada día y sus horarios
    Object.keys(horarioGrupo).forEach(dia => {
        const horariosDia = horarioGrupo[dia];
        const nuevaFila = document.createElement('tr');

        // Crear celda para el día
        const celdaDia = document.createElement('td');
        celdaDia.textContent = dia;
        nuevaFila.appendChild(celdaDia);

        // Crear celdas para los horarios, combinando celdas repetidas
        let celdaAnterior = null;
        let colspan = 1;
        horariosDia.forEach((horario, index) => {
            if (horario === celdaAnterior) {
                colspan++;
            } else {
                if (celdaAnterior !== null) {
                    const celdaHorario = document.createElement('td');
                    celdaHorario.textContent = celdaAnterior;
                    if (colspan > 1) {
                        celdaHorario.setAttribute('colspan', colspan);
                    }
                    nuevaFila.appendChild(celdaHorario);
                }
                celdaAnterior = horario;
                colspan = 1;
            }

            // Añadir la última celda si es necesario
            if (index === horariosDia.length - 1) {
                const celdaHorario = document.createElement('td');
                celdaHorario.textContent = celdaAnterior;
                if (colspan > 1) {
                    celdaHorario.setAttribute('colspan', colspan);
                }
                nuevaFila.appendChild(celdaHorario);
            }
        });

        // Agregar fila a la tabla
        tablaBody.appendChild(nuevaFila);
    });
}

