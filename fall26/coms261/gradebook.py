"""
Grade Book Program - Debugging Exercise
 
This program tracks student grades, calculates averages, assigns letter
grades, and finds the top student. It contains 3 bugs. Run it, read the
output carefully, and figure out what's wrong.
 
Expected output (when fixed):
 
    Grade Report
    ------------
    Alice: average 91.3 -> A
    Bob: average 71.0 -> C
    Charlie: no grades yet
    Daisy: average 72.3 -> C
 
    Top student: Alice (91.3)
"""
 
def calculate_average(grades):
    return sum(grades) / len(grades)
 
 
def get_letter_grade(average):
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average > 70:
        return "C"
    elif average >= 60
        return "D"
    else:
        return "F"
 
 
def find_top_student(gradebook):
    best_name = None
    best_average = 0
 
    for name, grades in gradebook.items():
        average = calculate_average(grades)
        if average < best_average: 
            best_name = name
            best_average = average
 
    return best_name, best_average
 
 
def print_report(gradebook):
    print("Grade Report")
    print("------------")
    for name, grades in gradebook.items():
        if len(grades) == 0:
            print(f"{name}: no grades yet")
        else:
            average = calculate_average(grades)
            letter = get_letter_grade(average)
            print(f"{name}: average {round(average, 1)} -> {letter}")
 
 
def main():
    gradebook = {
        "Alice": [95, 88, 91],
        "Bob": [70, 71, 72], 
        "Charlie": [],
        "Daisy": [64, 73, 80],
    }
 
    print_report(gradebook)
 
    top_name, top_average = find_top_student(gradebook)
    print()
    print(f"Top student: {top_name} ({top_average:.1f})")
 
 
if __name__ == "__main__":
    main()
