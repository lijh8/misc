- Put text after its node or link; no spaces between text and its node or link.
- end can be text; id alternatives: End, END, endnode, finish, close, exit.
- No id or text like -o-, -x-; use capital -O-, -X-, or spaces - o -, - x -.
- Arrow on single left side of a link is invalid.
- Chain sequential links on one line; put parallel links on separate lines.
- Similar tools: graphviz (dot), yED, draw.io, visio.

```mermaid
---
title: Flow Chart
---
flowchart
    %% chain sequential links on one line
    start --> input --> check{check}

    %% parallel links on separate lines
    check --x|foo| foo --> finish
    check -->|err| err --> finish
    check -->|no| finish
    check -->|ok| bar[do something] --> finish

    conf --> bar --> output
    deps --> bar

    %% use a separate node for adding text lines
    classDef c1 text-align:left
    note1["
    (1) drop the input foo
    (2) config it before start
    (3) fully static deps
    "]:::c1

```
