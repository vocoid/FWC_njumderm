if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
else
    [ "$1" ] && echo "$1"
    [ "$2" ] && echo "$2"
    [ "$3" ] && echo "$3"
fi