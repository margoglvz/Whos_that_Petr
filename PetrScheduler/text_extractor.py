import cv2 
import pytesseract
import os
import re
from dateutil import parser
import f
#from PIL import Image
#import datetime
#import dateparser

# from bard
def parse_dates_and_times(text: str) -> str:
    """Parses dates and times from a string of text.

    Args:
        text: A string of text.

    Returns:
        A string of the collected date and time.
    """

    at_times = re.compile(r"((SUN|MON|TUES|WEDNES|THURS|FRI|SAT)(?:DAY)?(S)?)\s*(?:(\d{1,2}[./-]\d{1,2})\s+)?@\s*(\d{1,2})(AM|PM)")
    at_matches = re.findall(at_times, text)

    tup_lst = list(at_matches[0])
    if (tup_lst[0].lower())[-1] == 's':
        tup_lst[0] = tup_lst[0][:-1]
    
    if tup_lst[3]:
        return tup_lst[0] + " " + tup_lst[3] + " " + tup_lst[4] + tup_lst[5]
    else:
        return tup_lst[0] + " " + tup_lst[4] + tup_lst[5]

def check_path(p: str) -> bool:
    """Checks if the path is a valid path.

    Args:
        p: A path to be verified.

    Returns:
        A boolean value indicating if the path is valid.
    """
    return os.path.exists(p)

def get_path():
    """Gets the path to a image file.

    Returns:
        A path.
    """
    ret_path = ""
    file_path = input("  Enter file path: ")
    if check_path(file_path):
        ret_path = file_path
    else:
        while True:
            new_path = input("  Enter valid file path: ")
            if check_path(new_path):
                ret_path = new_path
                break
            else:
                print('  That is not a valid path.')
    
    return ret_path

def image_process() -> (str, str):
    """Runs the image processing and date extraction.

    Returns:
        The Petr Name being dropped and the time it will be dropped.
    """

    name = input("  Please enter the new Petr's Name/Title: ")
    print(f" >> Name Entered: {name}")
    print("|                                                                                    |")
    p = get_path()
    img = cv2.imread(p)
    text = pytesseract.image_to_string(img)

    vals = parse_dates_and_times(text) # [Day, abbreviated day, 's', hour, AM or PM]
    date_time = parser.parse(vals, fuzzy=True)

    tt = date_time.timetuple()
    date = str(tt[1]) + "/" + str(tt[2]) + "/" + str(tt[0])
    c_form = date_time.ctime()
    combined = c_form[:3] + " " + date + " " + "@" + c_form[11:-8]

    return name, combined

def main():
    print("+------------------------------------------------------------------------------------+")
    print("|                        Hi and Welcome to the PETR Scheduler!                       |")
    print("+------------------------------------------------------------------------------------+")
    print("| You can upload screenshots of the events you see and we'll schedule it in for you! |")
    question = input("| Would you like to schedule a Petr Drop Time? (Enter y or n) ")
    print("|                                                                                    |")
    if question == "y":
        petr_name, time = image_process()
        f.write_file(petr_name, time, "petrdrops.txt")
        print("|                                                                                    |")
        print(f" >> You have scheduled {petr_name}'s drop to be on {time}!")
        print("|                                                                                    |")
        print("| Thank you and have a good day!                                                     |")
        print("|                                                                                    |")
    else:
        print("|                                                                                    |")
        print("| Thank you for trying out the scheduler!                                            |")
        print("|                                                                                    |")

    print("| If you're looking for a rough schedule, we weren't able to make a pretty GUI or    |") 
    print("| GUI or integrate this portion into our web application but there's a file with     |")
    print("| the stored Petr drops!                                                             |")
    print("|                                                                                    |")
    print("| Checkout the petrdrops.txt file!                                                   |")
    print("+------------------------------------------------------------------------------------+")

main()

# UNUSED
# pattern = r'\w+ \d+/\d+ @\d+:\d+[APM]+'
    # #text = "Thursday 11/24 @3PM"
    # matches = re.findall(pattern, text)
    # print(matches)

    # at_date = re.compile(r"""
    # (((SUN|MON|TUES|WEDNES|THURS|FRI|SAT)(?:DAY)?(S)?)       # Day pattern
    # \s+
    # (11/24)                                                # Date pattern
    # \s+
    # @\s+
    # (\d{1,2})                                                # Hour pattern
    # (AM|PM)                                                 # AM/PM pattern
    # )""", re.VERBOSE) 
    # match = at_date.fullmatch("THURSDAY 11/24 @3PM")
    # if match:
    #     day, date, hour, ampm = match.groups()
    #     print(day, date, hour, ampm)  # Prints: Thursday 11/24 3 PM
    # else:
    #     print("Invalid time expression")
    
    # import spacy

    # nlp = spacy.load("en_core_web_sm")

    # text = "THURSDAY 11/24 @3PM"

    # doc = nlp(text)

    # # Extract date entities
    # dates = [ent.text for ent in doc.ents if ent.label_ == "DATE"]
    # times = [ent.text for ent in doc.ents if ent.label_ == "TIME"]

    # print(dates)
    # print(times)

    #image = cv2.imread(image_path)
    #text = tesserocr.image_to_string(image)
    #print(text)

    # Regular expressions to match dates and times in different formats.
    #date_regex = re.compile(r'\d{2}[./-]\d{2}[./-]\d{2}')
    #time_regex = re.compile(r'\d{1,2}:\d{2}(:\d{2})?')
    
    #match = re.search(pattern, "SUNDAY @3PM")
    #at_times = re.compile(r"(MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY|SUNDAY)\s+@\s+(\d{1,2})(PM)")
    #at_times = re.compile(r"(MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY|SUNDAY)\s+@\s*(\d{1,2})(AM|PM)")
    #at_times = re.compile(r"(MONDAY(S)?|TUESDAY(S)?|WEDNESDAY(S)?|THURSDAY(S)?|FRIDAY(S)?|SATURDAY(S)?|SUNDAY(S)?)\s+@\s*(\d{1,2})(AM|PM)")
    #at_times = re.compile(r"((SUN|MON|TUES|WEDNES|THURS|FRI|SAT)(?:DAY)?(S)?)\s+@\s*(\d{1,2})(AM|PM)")

    #at_date = re.compile(r"(?P<day>\b\w+\b)\s+(?P<date>\d{1,2}\/\d{2}\/\d{4})\s+@\s+(?P<time>\d{1,2})(PM)")
    # at_date = re.compile(r"""
    # (((SUN|MON|TUES|WEDNES|THURS|FRI|SAT)(?:DAY)?(S)?)       # Day pattern
    # \s+
    # (11/24)                                                # Date pattern
    # \s+
    # @\s+
    # (\d{1,2})                                                # Hour pattern
    # (AM|PM)                                                 # AM/PM pattern
    # )""", re.VERBOSE) 

    # Extract all dates and times from the text.
    #dates = re.findall(date_regex, text)
    #times = re.findall(time_regex, text)
    #date_matches = re.findall(at_date, text)
    #print(date_matches)
    #print(at_matches)

    # Convert the dates and times to Python objects.
    #   date_objects = [datetime.datetime.strptime(date, '%d/%m/%Y') for date in dates]
    #   time_objects = [datetime.time.strptime(time, '%H:%M:%S') for time in times]
    #date_objects = [dateparser.parse(date) for date in dates]
    #time_objects = [dateparser.parse(time) for time in times]

    # Return a list of date and time objects.
    # format return

     # Convert image to grayscale
    #gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # Apply threshold to convert to binary image
    #threshold_img = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
    # Pass the image through pytesseract
    # Print the extracted text
    #print(text)
    #dates_and_times = dateparser.parse("hi there Wednesday @12 PM")
    #print(dates_and_times)
    #print(vals)
    #vals2 = parse_dates_and_times("MONDAY @3PM")
    #print(vals)
    #print(vals2)
    #from dateutil.tz import gettz
    #text = "THURSDAY 11/24 @3PM"
    # tzinfos = {"PST": gettz("America/Los Angeles")}
    #tzinfos = {"PST": -7*3600}
    #print(text)
    #t = "THURSDAY @3PM"
     # date_time = parser.parse(text, tzinfos=tzinfos, fuzzy=True)
    #print(date_time)
    #split = date_time.split()
     #time = str(tt[3]) + ":" + str(tt[4])
    #print(date)
    #print(date_time.ctime())