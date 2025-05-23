import h5py
with h5py.File('example.h5', 'r') as file:
	print("Содержимое файла:")
	file.visit(lambda name: print(name))
 
	# Чтение данных из группы и датасета
	if 'my_group' in file:
    	group = file['my_group']
    	if 'my_dataset' in group:
        	dataset = group['my_dataset']
        	data = dataset[:]  # Чтение всех данных из датасета
        	print("Данные из датасета:", data)

       	# Указание координат (например, [x, y, z])
    	coordinates = (10, 20)  # Пример: 10-я строка, 20-й столбец
 
    	# Проверка, что координаты находятся в пределах датасета
    	if all(0 <= coord < dim for coord, dim in zip(coordinates, dataset.shape)):
            value = dataset[coordinates]
        	print(f"Значение по координатам {coordinates}: {value}")
    	else:
        	print("Координаты выходят за пределы датасета.")
	else:
    	print(f"Датасет {dataset_path} не найден.")