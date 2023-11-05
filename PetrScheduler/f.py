def write_file(n,t,file):
    with open(file, "a") as open_file:
        open_file.write(f"The {n} Petr \n")
        open_file.write(f"Dropped on: {t}\n")
        open_file.write("\n")

# Petr Name
# Dropped on: 
