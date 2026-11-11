---
layout: default
page_class: assignment
course: true
title: Critique by design
---
# Assignment: Critique and redesign (MakeoverMonday)

## Step one: the visualization

I selected this data visualization because of the information it was trying to communicate. I am very interested in protein intake, so the topic immediately caught my attention. I was curious to see how I could get 30 grams of protein at an affordable price. As I started exploring the data, I realized that there was room for improvement, such as categorizing the products into vegan and non-vegan protein sources or improving the way prices were displayed. My ultimate goal was to make the visualization more relevant and useful to people like me who want to consume a high amount of protein at an affordable price.

link to the original data visualization: https://makeovermonday.vercel.app/dataset/2023w8

<img width="695" height="705" alt="Screenshot 2026-11-11 at 9 22 06 AM" src="https://github.com/user-attachments/assets/4950471b-6f72-4f95-8bed-b1ea82ad2fc1" />




## Step two: the critique
First things I saw were the images, I think are distracted and are repetitive because the graph already has the names of each product. The images could help the audience identify the food but at the same time they can draw the attention away from the main comparison. Another thing that confused me at first was the calorie information inside the bars. Since the main purpose of the visualization is to compare the cost of getting 30 grams of protein from different foods, I initially thought those numbers represented protein rather than calories. I think including calories without clearly separating them from the main metric makes the visualization harder to interpret. These observations made my choice of aesthetics rating and engagement rating both 6/10 because although the graphic made me wonder more about the data and it is pleasant to look at some elements as mentioned before are distracting from the data.
One thing that works really well is how the data is sorted by price. This makes it easy to identify the most expensive option, Quorn, and the cheapest, chicken. The ordering helps the audience quickly understand the main message without having to examine every individual bar.

However, I think the price information could be improved. The Y-axis shows the price scale, but it is difficult to determine the exact cost for each product. For example, I cannot immediately tell whether 30 grams of protein from chicken costs $1 or $1.50. Adding the exact price to each bar would make the visualization more precise and useful for someone trying to make purchasing decisions. This is why I gave perceptibility a ¾ and intuitiveness a 4/10 because although the graph uses familiar format , the audience still needs to estimate the value to get specific information.

I also think distinguishing between animal-based and plant-based protein sources would make the comparison more informative, especially for people with different dietary preferences. For this main reason along with the price context I gave a rate of 4/10 to the completeness component.

I think the primary audience is people who are interested in nutrition, fitness, and finding affordable sources of protein. More specifically, people who go to the gym regularly, bodybuilders, and individuals trying to build muscle while staying within a budget could benefit from this visualization.

I can relate to this audience because I am also interested in finding foods that provide a high amount of protein at a reasonable price.
I gave the visualization a usefulness rating of 6/10 because it provides valuable information. We can still see what are the cheapest and most expensive proteins in general, but it could improve a lot more if cost were specified, giving the audience the choice to make purchase decisions based on specific prices.

One of my main priorities in the redesign would be making the price information easier to interpret. Instead of relying only on a price scale from $1 to $5, I would add the exact cost directly to each bar. This would allow people to compare the products without having to estimate their prices.
Another improvement would be distinguishing between plant-based and animal-based protein sources, possibly by using different colors. I think this would make the visualization more useful for people with different dietary preferences while still allowing them to compare prices.
I would also reconsider the product images and calorie information. I want the main focus to be the cost of obtaining 30 grams of protein, so I would try to reduce any visual elements that distract from that comparison.

## Step three: Sketch a solution

According to my finding, this was the first initial sketch I came up with. 
First, I omitted the images, rearranged the bars vertically and set the exact price to each product, also I categorized the sources and gave them  different colors.
<img width="3021" height="2247" alt="IMG_6838 copy" src="https://github.com/user-attachments/assets/2af7533a-99b7-447b-b795-17c93030b2b4" />


## Step four: Test the solution
### Peer Interview Feedback

| Question | Interviewee 1 | Interviewee 2 | Interviewee 3 | Interviewee 4 |
|---|---|---|---|---|
| Participant profile | MSPPM student, mid-20s, TSWD class | MSPPM student, mid-20s, TSWD class | MSPPM student, mid-20s, another class | MSPPM student, mid-20s, TSWD class |
| What does the visualization communicate? | Not specifically discussed | Not specifically discussed | Compares the cost of obtaining 30 grams of protein from different sources, sorted by price | Not specifically discussed |
| What worked well? | Informative title and sorting by price | Colors differentiate protein categories; informative title | Easy to identify cheapest and most expensive sources and recognize that most are animal-based | Not specifically discussed |
| What was confusing? | Asked whether an average reference line was available | No confusion reported | The letter G looked like a 6; product brands were unclear | Unclear currency units and intended audience |
| What improvements were suggested? | Add an average reference line | Use red or brown for animal-based protein | Include product brands, move title to top, and clarify axis labels | Use gray for undefined categories and clarify currency |
| Who is the intended audience? | Not discussed | Not discussed | People interested in increasing protein intake | Questioned whether it was everyday consumers or policymakers |


**Synthesis:**

After reviewing my interviews I can see that in general the visualization communicates its main purpose. For example, one thing I did well was sorting the bars, the interview 1 and 3 commented that that sorting allows them to easily identify the most and least expensive option. Another observation was about the colors, while interviewee 2 expressed that the colours were a very good way to differentiate the protein sources, he also recommended changing the animal category source to a brown or red. Interviewee 4 also suggested that using grey for the unknown category would be more appropriate. I think these comments make sense and it would be worth it implementing them. 

One thing I found interesting is how the interviewee 1 and 2  agree that the tittle was very well designed and informative, but interviewee 3 found confusing part of it, and after today’s class I think it make sense, it was typography, typography matters, participant 3 thought it was a 6 instead of a G. (this is a good note to mention).
Overall I think I am going in a good direction and the feedback made me realize that there are some opportunities to improve in the use of colors and even typography. 

This is my second sketch after the feedback received. 
<img width="2913" height="2025" alt="IMG_6840" src="https://github.com/user-attachments/assets/10c7ff5d-bc3d-428c-b130-b055d7f02e2a" />


## Step five: build the solution

For my final solution I started off using a tutorial from MakeoverMonday video, it helped me to understand how to set up my design. I followed the feedback made by the interviewees focusing on the distinctions and matched colors. I did create a filter showing plant base in green and animal base in a dark red, in the title I used 'grams' instead of only 'G' and also did add the average line for the audience as a reference. 
It is also important to mention that the initial visualization had 30 grams of protein in the data, but the data set I was working on represents only 20grams that is why the title is different. 

**Final Visualization on Tableau:**

<div class='tableauPlaceholder' id='viz1794432906905' style='position: relative'><noscript><a href='#'><img alt='How Much Does 20 Grams of Protein Cost? ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ho&#47;HowMuchDoes20GramsofProteinCost&#47;HowMuchDoes20GramsofProteinCost&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='HowMuchDoes20GramsofProteinCost&#47;HowMuchDoes20GramsofProteinCost' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ho&#47;HowMuchDoes20GramsofProteinCost&#47;HowMuchDoes20GramsofProteinCost&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>
<script type='text/javascript'>
  var divElement = document.getElementById('viz1794432906905');
  var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>


## References
Tutorial title: 
The Cheapest Way to Get Your Protein - #MakeoverMonday 2023 Week 8

Direct URL: https://www.youtube.com/watch?v=45pgu_SrZsg&list=PLX-uPHRG0cLb697Ie-ZGSObRLLNhxzJGK&index=55 


## AI acknowledgements
AI usage: I used AI to select my preferred colors, to organize the my markdown table with the interviews and also to check grammar and sentences organization.



.assignment .page-content > h1:first-of-type {
  font-size: clamp(30px, 4vw, 48px);
  letter-spacing: -1px;
}

