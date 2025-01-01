import time
from random import randint
import os


for i in range(5, -1, -1):
    os.system('cls' if os.name == 'nt' else 'clear')
    print(f"\n\n{' ' * 30}Starting in: {i}")
    time.sleep(1)

# Clear the screen for a clean start
os.system('cls' if os.name == 'nt' else 'clear')

# ASCII-based hidden messages
hidden_message = [
    [32, 32, 72, 65, 80, 80, 89, 32, 78, 69, 87, 32, 89, 69, 65, 82],
    [32, 72, 65, 80, 80, 89, 32, 78, 69, 87, 32, 89, 69, 65, 82],
    [72, 65, 80, 80, 89, 32, 78, 69, 87, 32, 89, 69, 65, 82]
]  
hidden_year = [32, 32, 50, 48, 50, 53]  

# Convert ASCII to text dynamically
def generate_text(ascii_list):
    return '\n'.join(''.join(chr(x) for x in line) for line in ascii_list)

message = generate_text(hidden_message)
year = ''.join(chr(x) for x in hidden_year)

# Simple fireworks graphic using loops and characters
firework_patterns = [
    "     *     ",
    "    ***    ",
    "   *****   ",
    "  *******  ",
    "   *****   ",
    "    ***    ",
    "     *     ",
]

# Display fireworks
def display_fireworks():
    for pattern in firework_patterns:
        print(pattern.center(80))
        time.sleep(0.2)
    print("\n" * 2)

# Main animation loop
s = ''
for i in range(1, 500):
    # Add random spaces for dynamic placement
    count = randint(1, 100)
    while count > 0:
        s += ' '
        count -= 1

    # Display fireworks every 50 iterations
    if i % 50 == 0:
        display_fireworks()

    # Display the hidden message 
    if i % 10 == 0:
        print(f"\033[1;31m{s}{message}\033[0m")  # Dynamically generated string, blinking effect
    elif i % 17 == 0:
        print(f"\033[1;32m{s}{year}\033[0m")  # Dynamically generated string, blinking effect
    else:
        print(s + '*')

    s = ''
    time.sleep(0.3)  # Delay for smooth animation
