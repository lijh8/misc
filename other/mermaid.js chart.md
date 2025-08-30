- Put text after its node or link.
- No spaces between text and its node or link.
- Link may have multi-directional arrows but its text is always after it.
- end can be text, but use alternatives like End, END, endnode as id.
- Avoid id or text -o-, -x-; capitalize O or X, or add space between it and dash.
- Chain sequential links on one line; place parallel links on separate lines.

- Alternatives: yED, visio, graphviz (dot), draw.io .

```mermaid
flowchart TD
    %% chained link on one line
    start --> input --> check{check}

    %% parallel links on separate lines
    check --x|foo| foo --> endnode[end]
    check -->|err| err --> endnode
    check -->|no| endnode
    check -->|ok| bar[do something] --> endnode

    conf --> bar --> output
    deps --> bar

```
