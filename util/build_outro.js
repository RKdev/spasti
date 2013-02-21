
    if (typeof module !== 'undefined') {
        // export for node
        module.exports = Spasti;
    } else {
        // assign to window
        this.Spasti = Spasti;
    }
}).apply(this);
