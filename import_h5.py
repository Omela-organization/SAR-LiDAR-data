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
