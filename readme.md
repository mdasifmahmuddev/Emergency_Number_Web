
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 ---
 

- **getElementById("id")** → Finds one element by its ID.
Example: calling a student by roll number → only that student shows.

- **getElementsByClassName("class")** → Finds all elements with the same class.
Example: all students wearing blue shirts show up.

- **querySelector("css")** → Finds first element matching a CSS .Ex: “Who is the first student in a blue shirt?” : first student responds.

- **querySelectorAll("css")** → Finds all elements matching a CSS selector.
Example: taking a photo of all students in blue shirts → everyone in blue shows.
---

### Code Examples :

```js
// By ID
document.getElementById("title").style.color = "red";

// By Class
let cards = document.getElementsByClassName("card");
cards[0].style.background = "yellow";

// First match by CSS
document.querySelector(".btn").style.background = "green";

// All matches by CSS
document.querySelectorAll("p").forEach(el => el.style.fontSize = "20px");
```
# 2. How do you create and insert a new element into the DOM?

We can create add and manipulate new elements in JavaScript in **three  steps**:

1. **Create element**  
   - document.createElement() makes it in memory.

2. **content && attributes**  
   - text, HTML, class, or ID.

3. **Insert Page**  
   - use appendChild(), prepend(), or insertBefore().
---

### Example 1: Add a simple div

```js
// 1. Create a div
let newDiv = document.createElement("div");
// 2. Add text
newDiv.textContent = "Hello World!";
// 3. Add a class 
newDiv.classList.add("my-div");
// 4. Insert into the page 
document.body.appendChild(newDiv);

```


## 3. What is Event Bubbling and how does it work?
  When you click an element, the event moves up to parent elements automatically.

 **Example**  : If you click a button inside a box, first the button reacts, then the box reacts.

---

## Steps
1. Event starts  when element you clicked.  
2. Goes to the parent.  
3. After parent’s parent.  
4. Keeps going until it reaches the destination. 

---

##  Example
```html
<div id="parent">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("child").addEventListener("click", () => {
    alert("Child clicked");
  });

  document.getElementById("parent").addEventListener("click", () => {
    alert("Parent clicked");
  });
</script>

```

## 4.Event Delegation in JavaScript

### What is Event Delegation?

Using one listener on a parent to handle clicks on its children.

### Why is it useful?
 
- **Faster:** few listeners, less memory used.
- **New elements work:** even elements added later.
- **Simple code:** one listener can manage many elements.
---

### Example: Click on list items

```html
<ul id="taskList">
  <li>Task 1</li>
  <li>Task 2</li>
  <li>Task 3</li>
</ul>
```

```js
// Add a single click listener to the parent <ul>
document.getElementById("taskList").addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    alert("You clicked: " + e.target.textContent);
  }
});
```


## 4.What is the difference between preventDefault() and stopPropagation() methods?

- **preventDefault()** → Stops the default action of an element.

**Example**: Clicking a link normally goes to another page. Using preventDefault() stops it.

- **stopPropagation()** → Stops the event from bubbling up (or capturing down) the DOM.

**Example**: Clicking a button inside a div won’t trigger the div’s click if you use stopPropagation().

