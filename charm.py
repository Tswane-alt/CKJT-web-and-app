
import requests

def decode_secret_message(url):
    #fetching the google doc content. Replace  'url' with the link to the the document
    response= requests.get(url)
    lines = response.text.strip().split('/n')

    
    grid ={}
    max_x = 0
    max_y = 0

    for line in lines[1: ]: #skip the header header
        parts = line.strip().split()
        if len(parts) ==3:
            char = parts[0]
            x= int(parts[1])
            y = int(parts[2])
            grid[(x,y)] = char
            max_x = max(max_x, x)
            max_y = max(max_y, y)

            #printing the grid
            for y in range(max_y +1):
                row = ''
                for x in range(max_x +1):
                    row +=grid.get((x,y), ' ')
                print(row)
                
    decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vQiVT_Jj04V35C-YRzvoqyEYYzdXHcRyMUZCVQRYCu6gQJX7hbNhJ5eFCMuoX47cAsDW2ZBYppUQITr/pub")