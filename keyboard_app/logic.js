var a = `1 the
2 be
3 of
4 and
5 a
6 to
7 in
8 he
9 have
10 it
11 that
12 for
13 they
14 I
15 with
16 as
17 not
18 on
19 she
20 at
21 by
22 this
23 we
24 you
25 do
26 but
27 from
28 or
29 which
30 one
31 would
32 all
33 will
34 there
35 say
36 who
37 make
38 when
39 can
40 more
41 if
42 no
43 man
44 out
45 other
46 so
47 what
48 time
49 up
50 go
51 about
52 than
53 into
54 could
55 state
56 only
57 new
58 year
59 some
60 take
61 come
62 these
63 know
64 see
65 use
66 get
67 like
68 then
69 first
70 any
71 work
72 now
73 may
74 such
75 give
76 over
77 think
78 most
79 even
80 find
81 day
82 also
83 after
84 way
85 many
86 must
87 look
88 before
89 great
90 back
91 through
92 long
93 where
94 much
95 should
96 well
97 people
98 down
99 own
100 just
101 because
102 good
103 each
104 those
105 feel
106 seem
107 how
108 high
109 too
110 place
111 little
112 world
113 very
114 still
115 nation
116 hand
117 old
118 life
119 tell
120 write
121 become
122 here
123 show
124 house
125 both
126 between
127 need
128 mean
129 call
130 develop
131 under
132 last
133 right
134 move
135 thing
136 general
137 school
138 never
139 same
140 another
141 begin
142 while
143 number
144 part
145 turn
146 real
147 leave
148 might
149 want
150 point
151 form
152 off
153 child
154 few
155 small
156 since
157 against
158 ask
159 late
160 home
161 interest
162 large
163 person
164 end
165 open
166 public
167 follow
168 during
169 present
170 without
171 again
172 hold
173 govern
174 around
175 possible
176 head
177 consider
178 word
179 program
180 problem
181 however
182 lead
183 system
184 set
185 order
186 eye
187 plan
188 run
189 keep
190 face
191 fact
192 group
193 play
194 stand
195 increase
196 early
197 course
198 change
199 help
200 line`

var b = a.split('\n');
for (let i=0; i<b.length; i++){
    b[i]=b[i].split(' ')[1]
}

// at this point b is just the words.

var input = document.getElementById('input');
var display = document.getElementById('display');
var time = 59;
var first_stroke = true;
var word;
var correct = 0;

function game(){
    
    createLines();

    alert('Welcome to the typing speed test!\n\nYou have 60 seconds to type as many words as you can.\nWords are randomly selected from the top 200 words from the English language.\n\nOnce you hit spacebar the word you entered gets judged as correct/incorrect and you must type in the next word to keep playing. Begin by typing into the input box.   Good luck!')

    input.addEventListener("keydown", keyDown)
    input.addEventListener("keyup", keyUp)
}

function createLines(){
    createNLines(10);
}

function createNLines(n){
    for (let i=0;i<n; i++){
        let node = document.createElement("span")
        node.innerHTML = b[Math.floor(Math.random()*199)];
        node.className="not_selected"
        display.appendChild(node);
    }
}

function keyDown(stroke){
    if (stroke.key==' '){
        if (display.children[word].className=='correct'){
            correct+=1;
        }
        word+=1
        setTimeout(function(){input.value = ''},1)        
    }
    if (word==display.children.length){
        display.innerHTML=''
        word=0
        createNLines(10)
    }
}

function keyUp(stroke){
    if (first_stroke){
        countdown()
        word = 0;
        first_stroke= !first_stroke
    }

    var typed = input.value;
    var display_substring = display.children[word].innerHTML.substring(0,typed.length);
    if (typed == ''){
        display.children[word].className="not_selected"
    }else if (typed == display_substring){
        display.children[word].className="correct"
    }else{
        display.children[word].className="incorrect"
    }
}

function countdown(){
    cd = document.getElementById("countdown")
    cd.innerHTML=time.toString() + " s";
    time -=1;
    if (time<0){
        // node = document.getElementById('result')
        // node.innerHTML = `Your typing speed is: ${correct} wpm!`
        alert(`Your typing speed is: ${correct} wpm!`)
        return
    }
    setTimeout(countdown, 1000)
}



game();
